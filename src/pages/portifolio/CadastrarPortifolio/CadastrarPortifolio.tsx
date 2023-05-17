import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./CadastrarPortifolio.module.css";
import Input from "../../../components/forms/input";
import { Portifolio, createOrUpdatePortifolio} from "../../../services/portifolioService";

const CadastrarPortifolio: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const portifolio = location.state as Portifolio;

const initialvalues: Portifolio = {
    id: 0,
    link: "",
    image: "",
    title: ""
};

const validationSchema = Yup.object().shape({
    link: Yup.string().required('Campo obrigatório'),
    image: Yup.string().required('Campo obrigatório'),
    title: Yup.string().required('Campo obrigatório'),
});

const onSubmit = async (values: Portifolio, { resetForm }: { resetForm: () => void}) => {
    try {
        await createOrUpdatePortifolio(values);
        console.log(values);
        resetForm();
        navigate("/portifolio/lista");
        alert("Portifólio enviado com sucesso");
    } catch (error) {
        console.error("Erro ao enviar o portifólio:", error);
        alert("Ocorreu um erro ao enviar o portifólio. Tente novamente,");

    }
};

    
    
            return (
                <div className={styles.forwrapper}>
                <Formik
                    initialValues={portifolio || initialvalues} 
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
            
            >    
                {({ errors, touched}) => (
                  <Form className={styles.form}>
                      <h2 className={styles.title}>Cadastro Projeto</h2>
                       <Input
                           label="Link"
                           name="link"
                           errors={errors.link}
                           touched={touched.link}
                     />  
                  
                  
                       <Input
                           label="Image"
                           name="image"
                           errors={errors.image}
                           touched={touched.image}
                    />
                  
                       <Input
                           label="Título"
                           name="title"
                           errors={errors.title}
                           touched={touched.title}
                    />

                    <button type="submit" className={styles.button}>Salvar</button>
                  </Form>
                )}
                  </Formik>
                  </div>
  );
};

export default CadastrarPortifolio;