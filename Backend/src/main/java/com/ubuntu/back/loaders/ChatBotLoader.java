package com.ubuntu.back.loaders;

import com.ubuntu.back.models.domain.AnswerChatBot;
import com.ubuntu.back.models.domain.CategoryQuestion;
import com.ubuntu.back.models.domain.QuestionChatBot;
import com.ubuntu.back.services.AnswerChatBotService;
import com.ubuntu.back.services.CategoryQuestionService;
import com.ubuntu.back.services.QuestionChatBotService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ChatBotLoader implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(ChatBotLoader.class);

    @Autowired
    private QuestionChatBotService questionChatBotService;

    @Autowired
    private AnswerChatBotService answerChatBotService;

    @Autowired
    private CategoryQuestionService categoryQuestionService;

    @Override
    public void run(String... args) throws Exception {
        logger.info("Starting ChatBotLoader...");

        if (categoryQuestionService.findAll().isEmpty() && questionChatBotService.findAll().isEmpty() && answerChatBotService.findAll().isEmpty()) {
            logger.info("Loading initial data...");
            List<CategoryQuestion> categories = loadCategories();
            List<QuestionChatBot> questions = loadQuestions(categories);
            loadAnswers(questions);
            logger.info("Data loaded successfully.");
        } else {
            logger.info("Data already exists, skipping load.");
        }
    }

    public List<CategoryQuestion> loadCategories() throws Exception {
        List<CategoryQuestion> categoryQuestions = new ArrayList<>();
        categoryQuestions.add(categoryQuestionService.save(CategoryQuestion.builder().name("Inicial").build()));
        categoryQuestions.add(categoryQuestionService.save(CategoryQuestion.builder().name("Desarrollo").build()));
        logger.info("Categories loaded: " + categoryQuestions);
        return categoryQuestions;
    }

    public List<QuestionChatBot> loadQuestions(List<CategoryQuestion> categoryQuestions) throws Exception {
        List<QuestionChatBot> questionChatBots = new ArrayList<>();
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué es un microemprendimiento?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo puedo empezar un microemprendimiento?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cuáles son los beneficios de invertir en un microemprendimiento?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué tipo de microemprendimientos puedo encontrar en esta plataforma?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo puedo registrarme como inversor?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo puedo registrarme como emprendedor?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué documentos necesito para registrarme como emprendedor?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué documentos necesito para registrarme como inversor?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cuáles son los requisitos para publicar un microemprendimiento?").category(categoryQuestions.get(0)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo se evalúan los microemprendimientos en la plataforma?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué criterios se utilizan para evaluar un microemprendimiento?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cuánto tiempo toma la evaluación de un microemprendimiento?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo puedo invertir en un microemprendimiento?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué métodos de pago están disponibles para invertir?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cuál es el monto mínimo de inversión?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cuál es el monto máximo de inversión?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué garantías ofrece la plataforma a los inversores?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo puedo contactar al emprendedor de un microemprendimiento?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué sucede si un microemprendimiento no alcanza su meta de financiación?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Puedo retirar mi inversión antes de que finalice el proyecto?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué sucede si un microemprendimiento fracasa?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué beneficios fiscales existen por invertir en microemprendimientos?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué tipo de apoyo brinda la plataforma a los emprendedores?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué tipo de apoyo brinda la plataforma a los inversores?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo puedo actualizar la información de mi perfil?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo puedo eliminar mi cuenta de la plataforma?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué sucede con mis datos personales?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo garantiza la plataforma la seguridad de las transacciones?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Qué debo hacer si tengo un problema con la plataforma?").category(categoryQuestions.get(1)).build()));
        questionChatBots.add(questionChatBotService.save(QuestionChatBot.builder().value("¿Cómo puedo obtener más información sobre un microemprendimiento específico?").category(categoryQuestions.get(1)).build()));
        logger.info("Questions loaded: " + questionChatBots);
        return questionChatBots;
    }

    public void loadAnswers(List<QuestionChatBot> questions) throws Exception {
        List<AnswerChatBot> answerChatBots = new ArrayList<>();
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Un microemprendimiento es un negocio pequeño iniciado por un emprendedor.").originQuestion(questions.get(0)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Puedes empezar un microemprendimiento identificando una oportunidad de negocio y desarrollando un plan.").originQuestion(questions.get(1)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Invertir en un microemprendimiento puede ofrecer altos retornos y apoyar la economía local.").originQuestion(questions.get(2)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("En esta plataforma puedes encontrar microemprendimientos en diversas áreas como tecnología, alimentos, y servicios.").originQuestion(questions.get(3)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Para registrarte como inversor, debes completar el formulario de registro y proporcionar la documentación necesaria.").originQuestion(questions.get(4)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Para registrarte como emprendedor, debes completar el formulario de registro y proporcionar la documentación necesaria.").originQuestion(questions.get(5)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Para registrarte como emprendedor, necesitas un documento de identidad y un plan de negocio.").originQuestion(questions.get(6)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Para registrarte como inversor, necesitas un documento de identidad y una prueba de fondos.").originQuestion(questions.get(7)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Para publicar un microemprendimiento, necesitas proporcionar una descripción detallada del proyecto y un plan de negocio.").originQuestion(questions.get(8)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Los microemprendimientos se evalúan en base a su viabilidad, impacto social, y potencial de retorno.").originQuestion(questions.get(9)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Los criterios de evaluación incluyen la viabilidad del negocio, el impacto social, y el potencial de retorno.").originQuestion(questions.get(10)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("La evaluación de un microemprendimiento puede tomar entre 1 a 2 semanas.").originQuestion(questions.get(11)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Puedes invertir en un microemprendimiento seleccionando el proyecto de tu interés y completando el proceso de inversión en la plataforma.").originQuestion(questions.get(12)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Los métodos de pago disponibles incluyen transferencia bancaria y pagos electrónicos.").originQuestion(questions.get(13)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("El monto mínimo de inversión es de $100.").originQuestion(questions.get(14)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("El monto máximo de inversión varía según el proyecto.").originQuestion(questions.get(15)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("La plataforma ofrece garantías como la revisión detallada de proyectos y el seguimiento continuo.").originQuestion(questions.get(16)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Puedes contactar al emprendedor a través de la sección de mensajes en la plataforma.").originQuestion(questions.get(17)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Si un microemprendimiento no alcanza su meta de financiación, los fondos son devueltos a los inversores.").originQuestion(questions.get(18)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("No, una vez realizada la inversión, no se puede retirar hasta que finalice el proyecto.").originQuestion(questions.get(19)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Si un microemprendimiento fracasa, se realizará un análisis para determinar las causas y aprender de la experiencia.").originQuestion(questions.get(20)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Existen beneficios fiscales como deducciones por inversiones en ciertos tipos de microemprendimientos.").originQuestion(questions.get(21)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("La plataforma brinda apoyo a los emprendedores en áreas como mentoría, marketing, y gestión financiera.").originQuestion(questions.get(22)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("La plataforma brinda apoyo a los inversores con información detallada y análisis de proyectos.").originQuestion(questions.get(23)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Puedes actualizar la información de tu perfil en la sección de configuración de la plataforma.").originQuestion(questions.get(24)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Para eliminar tu cuenta, debes contactar al soporte de la plataforma.").originQuestion(questions.get(25)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Tus datos personales son tratados con confidencialidad y según la normativa de protección de datos.").originQuestion(questions.get(26)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("La plataforma utiliza encriptación y otros métodos de seguridad para proteger las transacciones.").originQuestion(questions.get(27)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Si tienes un problema con la plataforma, puedes contactar al soporte a través del formulario de contacto.").originQuestion(questions.get(28)).build()));
        answerChatBots.add(answerChatBotService.save(AnswerChatBot.builder().value("Para obtener más información sobre un microemprendimiento específico, puedes visitar su página de proyecto en la plataforma.").originQuestion(questions.get(29)).build()));
        logger.info("Answers loaded: " + answerChatBots);
    }
}
