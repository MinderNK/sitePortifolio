import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import ContactForm from './components/ContactForm.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code, 
  Smartphone, 
  Settings,
  User,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'Sobre', icon: User },
    { id: 'services', label: 'Serviços', icon: Settings },
    { id: 'portfolio', label: 'Portfólio', icon: Briefcase },
    { id: 'experience', label: 'Experiência', icon: GraduationCap },
    { id: 'contact', label: 'Contato', icon: MessageSquare }
  ]

  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'C#', 'Java','C++',
    'PHP', 'MySQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'Figma', 'RESTful APIs',
    'Bootstrap', 'Tailwind CSS', 'Haskell', 'Vue.js', 'Linux', 'Flutter', 
    'React Native', 'UI/UX Design', 'SEO', 'Accessibility', 'Responsive Design'
  ]

  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites responsivos e aplicações web modernas usando tecnologias do mercado.'
    },
    {
      icon: Smartphone,
      title: 'Aplicações Móveis',
      description: 'Desenvolvimento de aplicativos móveis nativos e híbridos.'
    },
    {
      icon: Settings,
      title: 'Consultoria em TI',
      description: 'Consultoria especializada em arquitetura de sistemas e soluções tecnológicas para empresas.'
    }
  ]

  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Plataforma de e-commerce completa com painel administrativo e integração de pagamentos.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'Sistema de Gestão',
      description: 'Sistema web para gestão empresarial com dashboard analítico e relatórios em tempo real.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'App Mobile Fitness',
      description: 'Aplicativo móvel para acompanhamento de exercícios e metas de fitness.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    }
  ]

  const experiences = [
    {
      year: '2024 - Atual',
      title: 'Estagiário de Tecnologia e Inovação',
      company: 'Espaço Concept – Clínica Multiprofissional | Guarujá| SP',
      description: 'Apoio no desenvolvimento e manutenção de sistemas internos para gestão de pacientes, agendamentos e prontuários. Suporte técnico à equipe em ferramentas digitais, equipamentos e rede interna. Pesquisa e implementação de soluções tecnológicas para otimização de processos e rotinas da clínica. Criação de automações e relatórios personalizados utilizando Google Workspace e outras ferramentas digitais. Auxílio na integração de sistemas e plataformas digitais (ex: WhatsApp Business, sistemas de gestão, agendamentos online). Participação ativa na análise de dados e indicadores para apoio à tomada de decisão. '
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-montserrat">
      {/* Navegação Fixa */}
      <nav className="fixed top-0 left-0 right-0 z-50 fixed-nav">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-poppins font-bold text-xl neon-text">
              Minder IT
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`smooth-transition hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Menu Mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Mobile Expandido */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 smooth-transition hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <item.icon className="inline mr-2" size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Seção Home */}
      <section id="home" className="hero-section gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <User size={64} className="text-primary-foreground" />
            </div>
            
            <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-4">
              <span className="neon-text">Minder IT</span>
            </h1>
            
            <h2 className="font-poppins text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
              Desenvolvedor Web e Mobile
            </h2>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Transformo ideias em soluções digitais. Desenvolvimento web, 
              aplicações móveis e consultoria em tecnologia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hover-glow smooth-transition"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2" size={20} />
                Entre em Contato
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="smooth-transition"
                onClick={() => scrollToSection('portfolio')}
              >
                <Briefcase className="mr-2" size={20} />
                Ver Portfólio
              </Button>
            </div>
            
            <div className="mt-12">
              <ChevronDown 
                size={32} 
                className="mx-auto animate-bounce text-primary cursor-pointer"
                onClick={() => scrollToSection('about')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">
              Sobre <span className="neon-text">Mim</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-poppins text-2xl font-semibold mb-4">
                  Desenvolvedor Apaixonado por Tecnologia
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Com mais de 5 anos de experiência no desenvolvimento de soluções digitais, 
                  especializo-me em criar aplicações web e móveis que combinam design moderno 
                  com funcionalidade robusta. Minha paixão é transformar ideias complexas em 
                  soluções simples e eficientes.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Formado em Sistemas para Internet, estou sempre em busca de novas tecnologias 
                  e metodologias para entregar o melhor resultado.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Habilidades Interpessoais:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Comunicação clara e efetiva</li>
                    <li>• Trabalho em equipe e liderança</li>
                    <li>• Resolução de problemas complexos</li>
                    <li>• Gestão de projetos e prazos</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-poppins text-xl font-semibold mb-6">Tecnologias</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="smooth-transition hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="services" className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">
              Meus <span className="neon-text">Serviços</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="smooth-transition hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader className="text-center">
                    <service.icon size={48} className="mx-auto mb-4 text-primary" />
                    <CardTitle className="font-poppins">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Portfólio */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">
              Meu <span className="neon-text">Portfólio</span>
            </h2>
            
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <Card key={index} className="project-card smooth-transition overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Code size={48} className="text-muted-foreground" />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-poppins">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-2" size={16} />
                        Código
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Experiência */}
      <section id="experience" className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">
              Minha <span className="neon-text">Experiência</span>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <Card className="smooth-transition hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <CardTitle className="font-poppins">{exp.title}</CardTitle>
                        <Badge variant="secondary">{exp.year}</Badge>
                      </div>
                      <CardDescription className="font-semibold text-primary">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">
              Entre em <span className="neon-text">Contato</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-poppins text-2xl font-semibold mb-6">
                  Vamos trabalhar juntos!
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estou sempre aberto a novas oportunidades. 
                  Entre em contato para discutirmos sobre como podemos trabalhar juntos.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 text-primary" size={20} />
                    <span>nickolasminder@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 text-primary" size={20} />
                    <span>+55 (13) 991635356</span>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <Button size="icon" variant="outline" className="hover-glow" href="https://github.com/MinderNK">
                    <Github size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover-glow" href="https://www.linkedin.com/in/nickolas-minder-a3668a1b3/?locale=en_US">
                    <Linkedin size={20} />
                  </Button>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Minder IT. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

