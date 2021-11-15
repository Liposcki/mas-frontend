import Modal from 'react-modal';
import {Container, Error} from './styles';
import {FiX} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import api from '../../services/api';
import React, { useEffect, useState } from 'react';

interface NewActivyModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivyModalData {
    courseunit: string;
    name: string;
    activy: string;
    date: Date;
}

interface CourseUnit {
    id: string;
    name: string;
    description: string;
}

export function NewActivyModal({isOpen, onRequestClose}:NewActivyModalProps){

    const [courseUnits, setCourseUnits] = useState<CourseUnit[]>([]);

    useEffect(() => {
        api.get('/courseunit')
            .then(response => setCourseUnits(response.data))
    },[])

    const {register, handleSubmit, formState: {errors}} = useForm<NewActivyModalData>()

    const onSubmit = handleSubmit(data => api.post('/activy', data).then(response => alert(response.data)))

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar atividade</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                <select {...register("courseunit")}>
                        <option selected value="">Selecione a Unidade Curricular</option>
                        {courseUnits.map(courseUnit => {
                            return (
                                <option value={courseUnit.id}>{courseUnit.name}</option>
                            )
                        })}
                    </select>
                    {errors.courseunit && <Error>O prenchimento do campo é obrigatório</Error>}                    
                    <input
                        type="text"
                        placeholder="Atividade"
                        {...register("activy", {required:true})}
                    />
                    {errors.activy && <Error>O preencimento do campo é obrigatório</Error>}
                    <input 
                        type="number"
                        step=".01"
                        placeholder="Nota da avaliação"
                        {...register("grade")}
                    />
                    {errors.grade && <Error>O prenchimento do campo é obrigatório</Error>}
                    <input
                        type="date"
                        placeholder="Data da Atividade"
                        {...register("date", {required:true})}
                    />
                    {errors.date && <Error>O preencimento do campo é obrigatório</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    )
}