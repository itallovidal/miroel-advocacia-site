import { Button } from "../../../styles";
import { forwardRef } from "react";
import { AboutWrapper, FormContent, FormWrapper } from "./style.ts";
import { Clock, Contact, Handshake, Instagram } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "../../../global-components/input/input.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { env } from "../../../../env.ts";
import { toast } from "sonner";

const schema = z.object({
  name: z
    .string({
      required_error: "É necessário preencher o nome.",
    })
    .min(1, "É necessário preencher o nome."),
  email: z
    .string({
      required_error: "É necessário preencher o email.",
    })
    .email("Email inválido."),
  phone: z
    .string({
      required_error: "É necessário preencher o telefone.",
    })
    .min(1, "É necessário preencher o telefone."),
  description: z
    .string({
      required_error: "É necessário descrever seu caso.",
    })
    .min(1, "É necessário descrever seu caso."),
});

export interface IFormSchema extends z.infer<typeof schema> {}

export const Form = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSchema>({
    resolver: zodResolver(schema),
  });

  async function sendForm(data: IFormSchema) {
    console.log(data);

    try {
      await emailjs.send(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        {
          publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      toast.success("Email enviado com sucesso!");
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast.error("Erro ao enviar email!");
        return;
      }
      toast.error("Erro ao enviar email!");
    }
  }

  return (
    <FormWrapper ref={ref} id={"form"}>
      <div>
        <AboutWrapper>
          <div>
            <Contact />
            <h3>Faça sua Avaliação sem custo!</h3>
          </div>
          <div>
            <span>Rua Rosalina Terra, 429 casa 3</span>
            <span>Portinho - Cabo Frio RJ</span>
            <span>(22) 99988-1123</span>
            <span>miroelspanaulinoadvocacia@gmail.com</span>
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
          <div id={"social"}>
            <Instagram />
            <a href="https://www.instagram.com/miroelpaulinoadvocacia/">
              Instagram
            </a>
          </div>
        </AboutWrapper>

        <FormContent onSubmit={handleSubmit(sendForm)}>
          <h3>Fale conosco</h3>
          <p>Descreva seu caso, vamos lhe ajudar.</p>

          <Input
            {...register("name")}
            errorMessage={errors.name?.message}
            field={"Nome"}
          />
          <Input
            {...register("email")}
            errorMessage={errors.email?.message}
            field={"Email"}
          />
          <Input
            {...register("phone")}
            errorMessage={errors.phone?.message}
            field={"Telefone"}
          />
          <Input
            isMultiline
            {...register("description")}
            errorMessage={errors.description?.message}
            field={"Descrição"}
          />
          <Button variantType={"dark"}>Enviar meu caso</Button>
        </FormContent>
      </div>
    </FormWrapper>
  );
});
