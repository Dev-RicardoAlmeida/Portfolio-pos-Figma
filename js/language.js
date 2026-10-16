const translations = {
    'Serviços': 'Services',
    'Projetos': 'Projects',
    'Sobre mim': 'About me',
    'DESENVOLVEDOR WEB': 'WEB DEVELOPER',
    'Português Brasileiro': 'Brazilian Portuguese',
    'Descer': 'Scroll',
    'Voltar ao topo': 'Back to top',
    'Seta para baixo': 'Down arrow',
    'Soluções Web para Diferentes Necessidades': 'Web Solutions for Different Needs',
    'Desenvolvimento de aplicações modernas, responsivas e otimizadas para oferecer uma excelente experiência em qualquer dispositivo.': 'Development of modern, responsive, and optimized applications that deliver an excellent experience on any device.',
    'Implemento novos projetos e também realizo melhorias em aplicações existentes, incluindo manutenção, correção de problemas, otimizações de desempenho e adição de novos recursos para manter seu site moderno, seguro e preparado para crescer junto com o seu negócio.': 'I build new projects and improve existing applications, including maintenance, bug fixes, performance optimization, and new features to keep your website modern, secure, and ready to grow with your business.',
    '2 Graduações': '2 Degrees',
    'na área de tecnologia': 'in technology',
    'Aplicações rápidas e otimizadas': 'Fast, optimized applications',
    'SITES INSTITUCIONAIS': 'BUSINESS WEBSITES',
    'Sites Institucionais': 'Business Websites',
    'Empresas': 'Businesses',
    'Profissionais Liberais': 'Independent Professionals',
    'Organizações': 'Organizations',
    'LANDING PAGES': 'LANDING PAGES',
    'Páginas de conversão': 'Conversion pages',
    'Captação de leads': 'Lead generation',
    'Campanhas de marketing': 'Marketing campaigns',
    'E-COMMERCE': 'E-COMMERCE',
    'Lojas virtuais': 'Online stores',
    'Catálogos de produtos': 'Product catalogs',
    'WEB APPS': 'WEB APPS',
    'Sistemas internos': 'Internal systems',
    'Ferramentas Web': 'Web tools',
    'Aplicações SaaS': 'SaaS applications',
    'Desenvolvimento Full Stack': 'Full Stack Development',
    'Especialista em Frontend': 'Frontend Specialist',
    'Alguns exemplos do que posso construir para seu negócio': 'Examples of what I can build for your business',
    'Conheça os tipos de projetos que desenvolvo para empresas, marcas e profissionais.': 'Explore the types of projects I build for businesses, brands, and professionals.',
    'Navegar para a esquerda': 'Navigate left',
    'Navegar para a direita': 'Navigate right',
    'Seta para esquerda': 'Left arrow',
    'Seta para direita': 'Right arrow',
    'Site institucional desenvolvido em WordPress para apresentação dos serviços e soluções da empresa. O projeto foi criado com foco em credibilidade, experiência do usuário e geração de contatos comerciais.': 'A business website built with WordPress to present the company\'s services and solutions. The project focuses on credibility, user experience, and generating business inquiries.',
    'Landing page desenvolvida em WordPress com foco em conversão e captação de clientes. O layout foi estruturado para destacar empreendimentos, fortalecer a presença digital da marca e incentivar o contato dos visitantes.': 'A WordPress landing page focused on conversions and customer acquisition. Its layout highlights developments, strengthens the brand\'s digital presence, and encourages visitors to get in touch.',
    'Sistema web desenvolvido em PHP para preenchimento de formulários e geração automática de documentos em PDF. O projeto automatiza processos internos e reduz o tempo gasto em tarefas operacionais repetitivas.': 'A web system built with PHP for completing forms and automatically generating PDF documents. It automates internal processes and reduces time spent on repetitive operational tasks.',
    'Ferramenta web criada com HTML, CSS e JavaScript para iniciar conversas no WhatsApp utilizando mensagens pré-definidas. A solução agiliza o atendimento e contribui para a padronização da comunicação com clientes.': 'A web tool built with HTML, CSS, and JavaScript to start WhatsApp conversations using predefined messages. It speeds up customer service and helps standardize communication with clients.',
    'Aplicação full stack desenvolvida com Java, Docker e banco de dados para geração e análise de apostas da Mega-Sena e Lotofácil. O projeto demonstra experiência com desenvolvimento backend, integração de sistemas e implantação em ambientes conteinerizados.': 'A full-stack application built with Java, Docker, and a database to generate and analyze Mega-Sena and Lotofácil lottery entries. The project demonstrates experience in backend development, system integration, and deployment in containerized environments.',
    'Quem sou?': 'About me',
    'Sou desenvolvedor web com formação em Sistemas de Informação, Ciências da Computação e pós-graduação em Desenvolvimento Web. Atualmente concentro meus estudos e projetos no desenvolvimento de aplicações modernas, buscando unir código limpo, interfaces intuitivas e soluções que realmente atendam às necessidades dos usuários.': 'I am a web developer with degrees in Information Systems and Computer Science, as well as a postgraduate qualification in Web Development. I currently focus my studies and projects on building modern applications, combining clean code, intuitive interfaces, and solutions that truly meet users\' needs.',
    'Ao longo da minha trajetória profissional, construí uma carreira de 16 anos no setor bancário, experiência que desenvolveu habilidades como responsabilidade, organização, resolução de problemas e foco em resultados. Hoje aplico essa mesma disciplina no desenvolvimento de software, transformando ideias em aplicações funcionais e bem estruturadas.': 'Over the course of my career, I spent 16 years in the banking sector, where I developed skills in responsibility, organization, problem-solving, and results-focused work. Today, I bring that same discipline to software development, turning ideas into functional, well-structured applications.',
    'Este portfólio reúne projetos desenvolvidos para colocar em prática diferentes tecnologias e desafios do desenvolvimento web. Estou sempre aprendendo, aprimorando minhas habilidades e acompanhando as melhores práticas do mercado para entregar soluções cada vez mais completas.': 'This portfolio brings together projects built to explore different technologies and challenges in web development. I am always learning, improving my skills, and following industry best practices to deliver increasingly complete solutions.',
    '"Desenvolver software vai além de escrever código: é criar soluções que geram valor para as pessoas."': '"Software development is about more than writing code: it is about creating solutions that bring value to people."',
    'Inspirado em Ian Sommerville': 'Inspired by Ian Sommerville',
    'Todos os direitos reservados': 'All rights reserved',
    'Logo Dev Ricardo Almeida': 'Ricardo Almeida Developer Logo',
    'Foto do Ricardo Almeida': 'Photo of Ricardo Almeida'
};

const textNodes = [];
const translatedAttributes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue.trim()) {
        textNodes.push({ node, original: node.nodeValue });
    }
}

document.querySelectorAll('[alt], [aria-label]').forEach(element => {
    ['alt', 'aria-label'].forEach(attribute => {
        if (element.hasAttribute(attribute)) {
            translatedAttributes.push({
                element,
                attribute,
                original: element.getAttribute(attribute)
            });
        }
    });
});

const originalTitle = document.title;
let languageChangeTimeout;

function setLanguage(language) {
    const isEnglish = language === 'en';
    const portugueseButton = document.getElementById('pt_br_Button');
    const englishButton = document.getElementById('en_us_Button');

    textNodes.forEach(({ node, original }) => {
        if (!isEnglish) {
            node.nodeValue = original;
            return;
        }

        const leadingWhitespace = original.match(/^\s*/)[0];
        const trailingWhitespace = original.match(/\s*$/)[0];
        const text = original.trim().replace(/\s+/g, ' ');
        const translation = translations[text];

        if (translation) {
            node.nodeValue = `${leadingWhitespace}${translation}${trailingWhitespace}`;
        }
    });

    translatedAttributes.forEach(({ element, attribute, original }) => {
        element.setAttribute(attribute, isEnglish ? translations[original] || original : original);
    });

    document.title = isEnglish ? `${originalTitle.split(' - ')[0]} - Web Developer` : originalTitle;
    document.documentElement.lang = isEnglish ? 'en-US' : 'pt-BR';
    portugueseButton.classList.toggle('idioma-selecionado', !isEnglish);
    englishButton.classList.toggle('idioma-selecionado', isEnglish);
}

function showLanguageLoading(language) {
    window.clearTimeout(languageChangeTimeout);
    document.body.classList.add('idioma-carregando');
    document.body.setAttribute('aria-busy', 'true');

    languageChangeTimeout = window.setTimeout(() => {
        setLanguage(language);
        document.body.classList.remove('idioma-carregando');
        document.body.removeAttribute('aria-busy');
    }, 500);
}

document.getElementById('pt_br_Button').addEventListener('click', event => {
    event.preventDefault();
    showLanguageLoading('pt');
});

document.getElementById('en_us_Button').addEventListener('click', event => {
    event.preventDefault();
    showLanguageLoading('en');
});

setLanguage('pt');