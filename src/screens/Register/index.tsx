import React from 'react';
import { Button } from '../../components/forms/Button';
import { Input } from '../../components/forms/Input';

import { 
    Container,
    Fields,
    Form,
    Header,
    Title, 
} from './styles';

export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                        placeholder='Nome'
                    />
                    <Input 
                        placeholder='Preço'
                    />
                </Fields>

                <Button title='Enviar'/>
            </Form>    

        </Container>
    );
}