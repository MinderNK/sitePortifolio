import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simular envio do formulário
    try {
      // Aqui seria feita a integração com um serviço de email real
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simular sucesso
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Limpar status após 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-poppins">Envie uma mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input 
              name="name"
              placeholder="Seu nome" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input 
              type="email" 
              name="email"
              placeholder="Seu email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Textarea 
              name="message"
              placeholder="Sua mensagem" 
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          {submitStatus === 'success' && (
            <div className="flex items-center text-green-600 text-sm">
              <CheckCircle size={16} className="mr-2" />
              Mensagem enviada com sucesso!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="flex items-center text-red-600 text-sm">
              <AlertCircle size={16} className="mr-2" />
              Erro ao enviar mensagem. Tente novamente.
            </div>
          )}
          
          <Button 
            type="submit"
            className="w-full hover-glow"
            disabled={!isFormValid || isSubmitting}
          >
            <Mail className="mr-2" size={16} />
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm

