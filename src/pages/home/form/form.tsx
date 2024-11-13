import { Button } from '../../../styles'
import { forwardRef } from 'react'
import {AboutWrapper, FormContent, FormWrapper} from "./style.ts";
import {Clock, Contact, Handshake} from "lucide-react";
import {z} from 'zod'
import {useForm} from "react-hook-form";
import {Input} from "../../../global-components/input/input.tsx";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string({
        required_error: 'É necessário preencher o nome.'
    }),
    email: z.string({
        required_error: 'É necessário preencher o email.'
    }),
    phone: z.string({
        required_error: 'É necessário preencher o telefone.'
    }),
    text: z.string({
        required_error: 'É necessário descrever seu caso.'
    }),
})

interface ISchema extends z.infer<typeof schema>{}


export const Form = forwardRef<HTMLDivElement>((_, ref) => {
    const {register, handleSubmit, formState: {errors}} = useForm<ISchema>({
        resolver: zodResolver(schema)
    })

    async function sendForm(data: ISchema){
        console.log(data)
    }

    return (
        <FormWrapper ref={ref} id={'form'} >
            <div>
                <AboutWrapper>
                    <div>
                        <Contact />
                        <h3>Faça sua Avaliação sem custo Agora!</h3>
                    </div>
                    <div>
                        <span>Endereço: Rua Rosalina Terra, 429 casa 3</span>
                        <span>Portinho - Cabo Frio RJ</span>
                        <span>Telefones: (22) 2041-0558 (22) 99988-1123</span>
                        <span>Email: miroelspanaulinoadvocacia@gmail.com</span>
                    </div>
                    <div>
                        <Clock />
                        <h3>Horarios de trabalho</h3>
                    </div>
                    <div>
                        <span>Segunda a Sexta: 9.00 AM – 17.00 PM</span>
                        <span>Sábado: 10.00 AM – 14.00 PM</span>
                        <span>Domingo: Fechado</span>
                    </div>
                    <div>
                        <Handshake />
                        <h3>Siga - nos</h3>
                    </div>
                    <div>
                        <span>Instagram</span>
                    </div>

                </AboutWrapper>

                <FormContent onSubmit={handleSubmit(sendForm)}>
                    <h3>Fale conosco</h3>
                    <p>Descreva seu caso, vamos lhe ajudar.</p>

                    <Input {...register('name')} errorMessage={errors.name?.message} field={'Nome'}/>
                    <Input {...register('email')} errorMessage={errors.email?.message} field={'Email'}/>
                    <Input {...register('phone')} errorMessage={errors.phone?.message} field={'Telefone'}/>
                    <Input isMultiline {...register('text')} errorMessage={errors.text?.message} field={'Descrição'}/>
                    <Button  variantType={'dark'}>Enviar meu caso</Button>
                </FormContent>
            </div>
        </FormWrapper>
    )
})
