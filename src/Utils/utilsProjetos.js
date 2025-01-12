import captiveImg from '../assets/captive.PNG';
import chatImg from '../assets/chat.PNG';
import xdrImg from '../assets/xdr.PNG';
import ngfwImg from '../assets/ngfw.PNG';
import gsmImg from '../assets/gsm.PNG';

export const projetos = [
    {
      id: 1,
      titulo: 'Captive Portal',
      descricao:
        `Captive Portal é um portal de autenticação.
        Tecnologias utilizadas: Frontend em React typescript e Backend Golang, com fiber.
        Utilização de Jwt, context e hooks.`,
      img: captiveImg,
      links: { site: 'https://www.blockbit.com/pt/', docs: 'https://pt.wikipedia.org/wiki/Firewall' },
    },
    {
      id: 2,
      titulo: 'ChatAI',
      descricao:
        `Chat de inteligencia artificial, que traz automação de tarefas e busca de conteúdo técnico através de linguagem natural.
        Tecnologias utilizadas: Via React e websocket.`,
      img: chatImg,
      links: { site: 'https://www.blockbit.com/pt/blockbit-ai/', docs: 'https://www.bitget.com/pt/academy/what-is-chatai-and-how-does-it-work' },
    },
    {
      id: 3,
      titulo: 'XDR',
      descricao:
        `Software de proteção a ameaças em múltiplos vetores. 
        Tecnologias utilizadas: Frameworks em React, Angular. Utiliza o Elastic para componetização (Menu, Tabelas, icones, etc)`,
      img: xdrImg,
      links: { site: 'https://www.blockbit.com/pt/blockbit-xdr/', docs: 'https://en.wikipedia.org/wiki/Extended_detection_and_response' },
    },
    {
        id: 4,
        titulo: 'NGFW',
        descricao:
          `Firewall, VPN e sistemas de proteção. 
          Tecnologias utilizadas: React, PHP, JQuery e Golang. Utiliza o ANTD para componetização (Menu, Tabelas, icones, etc)`,
        img: ngfwImg,
        links: { site: 'https://www.blockbit.com/pt/next-generation-firewall/', docs: 'https://pt.wikipedia.org/wiki/Firewall' },
    },
    {
        id: 4,
        titulo: 'GSM',
        descricao:
          `Gerenciador de Firewall's . 
          Tecnologias utilizadas: React e PHP. Utiliza o ANTD para componetização dos itens (Menu, Tabelas, icones, etc)`,
        img: gsmImg,
        links: { site: 'https://www.blockbit.com/pt', docs: 'https://pt.wikipedia.org/wiki/Firewall' },
    },
];