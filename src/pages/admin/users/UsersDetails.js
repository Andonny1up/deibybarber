import React, { useEffect, useState } from 'react';
import Container from '../../../components/Container'
import ContainerTop from '../../../components/ContainerTop';
import TitleIconPage from '../../../components/TitleIconPage';
import Card from '../../../components/Card';
import ProfilePicture from '../../../components/ProfilePicture';
import PanelInfo from '../../../components/PanelInfo';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { checkAuth } from '../../../services/authService';
import axios from 'axios';

const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UsersDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const pass = await checkAuth();
                if (!pass) {
                    navigate('/login');
                    return;
                }
                const response = await axios.get(`http://localhost:8000/api/users/${id}/`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                setUser(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, [id, navigate]);

    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    }
    return (  
        <section>
            <ContainerTop>
                <TitleIconPage title="Detalles del usuario" icon="person"/>        
            </ContainerTop>
            <Container>
                <Card>
                    
                {user ? (
                    <>
                        <ContainerImg>
                            {user.profile_picture && (
                                <ProfilePicture src={user.profile_picture} size={'200px'} />
                            )} 
                        </ContainerImg>
                        {user.username && (
                        <PanelInfo title={'Usuario'} value={user.username} />
                        )}
                        {user.first_name && (
                        <PanelInfo title={'Nombre'} value={user.first_name + ' ' + user.last_name} />
                        )}
                        {user.email && (
                        <PanelInfo title={'Email'} value={user.email} />
                        )}
                        {user.birthdate && (
                        <PanelInfo 
                            title={'Fecha de Nacimiento'} 
                            value={formatDate(user.birthdate)}  />
                        )}
                        {user.phone && (
                        <PanelInfo title={'Telefono'} value={user.phone} />
                        
                        )}
                    </>   
                ) : (
                    <p>Cargando...</p>
                )}
                </Card>
            </Container>
        </section>
    );
}

export default UsersDetails;