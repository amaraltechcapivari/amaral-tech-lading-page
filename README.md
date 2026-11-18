# Amaral Tech — Landing page

Site comercial da Amaral Tech (instalações elétricas, climatização, segurança eletrônica e infraestrutura de redes), focado em gerar pedidos de orçamento pelo WhatsApp.

Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react.

## Rodando localmente

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

## Antes de publicar — checklist

Tudo fica em **`src/config/site.ts`**:

| O quê | Campo | Observação |
| --- | --- | --- |
| Número do WhatsApp | `WHATSAPP_NUMBER` | Configurado: `5519994521218`. Somente dígitos, formato internacional. |
| Telefone exibido | `contact.phoneDisplay` | Configurado: `(19) 99452-1218`. |
| Domínio do site | variável `NEXT_PUBLIC_SITE_URL` | Opcional. Na Vercel, sem ela, usa o domínio de produção do projeto automaticamente. |
| Instagram | `social.instagram`, `social.instagramHandle` | Vazio = oculto. |
| E-mail | `contact.email` | Vazio = oculto. |
| Cidade / região (SEO local) | `location.city`, `location.state`, `location.serviceArea` | Entram no Schema.org e na meta description. |
| Horário de atendimento | `businessHours` | Vazio = oculto. |

Campos vazios nunca são publicados — nem na página nem nos dados estruturados para o Google.

## Deploy na Vercel

1. Envie o projeto para um repositório no GitHub (ou GitLab/Bitbucket).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. A Vercel detecta Next.js sozinha — não é preciso alterar comandos de build.
3. Clique em **Deploy**.
4. (Opcional) Com domínio próprio: adicione-o em *Settings → Domains* e crie a variável de ambiente `NEXT_PUBLIC_SITE_URL` com o endereço completo (ex.: `https://www.seudominio.com.br`). Faça um novo deploy para aplicar.

Cada `git push` na branch principal gera um novo deploy automaticamente.

## Conteúdo

**`src/config/content.ts`** concentra serviços, diferenciais, galeria, etapas do atendimento, FAQ, opções do formulário e avaliações.

- **Avaliações:** a lista `testimonials` começa vazia (a seção mostra um convite para avaliar). Adicione apenas avaliações reais, seguindo o exemplo comentado no arquivo.
- **Mensagens do WhatsApp:** em `src/lib/whatsapp.ts` (`whatsappMessages`).

## Imagens

As fotos atuais são de banco de imagens ([Pexels](https://www.pexels.com/license/), uso comercial permitido) e estão marcadas como ilustrativas no site.

Para trocar por fotos reais dos seus trabalhos:

1. Coloque o arquivo em `public/images/...` (`.webp` ou `.jpg`, ~1600 px de largura).
2. Atualize `src` e `alt` do item em `src/config/content.ts`.
3. Na galeria, use `illustrative: false` para remover o selo "Imagem ilustrativa".

Imagens fixas de seções: hero (`public/images/hero/`), sobre (`impacto/`), CTA final (`cta/`) e atendimento (`atendimento/`).

## Logotipo

- `public/brand/amaral-tech-logo.png` — logotipo original, sem alterações.
- `public/brand/amaral-tech-symbol.png` — recorte exato do símbolo "AT" do original (sem redimensionar nem recolorir), usado no header e no favicon.

O logotipo completo tem texto azul e cinza-escuro, então aparece sobre um cartão claro no rodapé e na imagem de compartilhamento. Se existir uma versão negativa (para fundo escuro), basta apontar `logo.full` para ela.

## Estrutura

```
src/
  app/            layout, página, SEO (sitemap, robots, manifest, ícones, OG)
  config/         site.ts (dados comerciais) e content.ts (conteúdo)
  lib/            whatsapp.ts (links/mensagens) e quote-form.ts (máscara/validação)
  components/
    layout/       Header, Footer, FloatingWhatsApp
    sections/     Hero, Services, Differentials, Impact, Gallery, Audience,
                  Process, Testimonials, Faq, FinalCta, Contact (+ ContactForm)
    ui/           Button, Reveal, SectionHeading, Container, BrandMark, ícones
    seo/          JsonLd (Schema.org ProfessionalService)
```
