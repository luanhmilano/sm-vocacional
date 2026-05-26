# Progress Stepper - Documentação

## 📋 Visão Geral

O **Progress Stepper** é um componente de barra de progresso integrado à Navbar que rastreia o progresso do usuário através das seções da landing page usando a API IntersectionObserver.

## 🎯 Funcionalidades

- ✅ Detecção automática da seção ativa usando IntersectionObserver
- ✅ Barra de progresso animada com gradiente
- ✅ Marcadores (steps) clicáveis para navegação rápida
- ✅ Tooltips informativos ao passar o mouse
- ✅ Indicador visual da seção atual com efeito de ring
- ✅ Animações suaves e responsivas
- ✅ Totalmente tipado com TypeScript
- ✅ Estilizado com Tailwind CSS

## 📁 Estrutura de Arquivos

```
src/
├── hooks/
│   └── useIntersectionObserver.ts    # Hook customizado para detectar seções
├── components/
│   └── navbar/
│       ├── index.tsx                  # Navbar principal (atualizada)
│       └── ProgressStepper.tsx        # Componente da barra de progresso
└── App.tsx                            # Aplicação principal (atualizada com IDs)
```

## 🔧 Componentes Criados

### 1. **useIntersectionObserver** (Hook Customizado)

**Localização:** `src/hooks/useIntersectionObserver.ts`

**Propósito:** Detecta qual seção está visível na viewport usando a API IntersectionObserver.

**Parâmetros:**
- `sectionIds: string[]` - Array com os IDs das seções a serem observadas
- `options`: Configurações opcionais
  - `threshold`: Porcentagem de visibilidade necessária (padrão: 0.3)
  - `root`: Elemento raiz para observação (padrão: viewport)
  - `rootMargin`: Margem ajustável (padrão: "-20% 0px -35% 0px")

**Retorno:** ID da seção atualmente ativa

**Exemplo de uso:**
```typescript
const activeSection = useIntersectionObserver(
  ["intro", "about", "features"],
  { threshold: 0.3 }
);
```

### 2. **ProgressStepper**

**Localização:** `src/components/navbar/ProgressStepper.tsx`

**Propósito:** Renderiza a barra de progresso com marcadores clicáveis.

**Props:**
- `steps: Step[]` - Array de steps com id e label
- `activeSection: string` - ID da seção atualmente ativa

**Características:**
- Barra horizontal com gradiente (brand-sand → brand-crimson)
- Marcadores circulares que mudam de cor quando ativos
- Efeito de ring pulsante no step atual
- Tooltips que aparecem ao hover e na seção atual
- Navegação por clique em qualquer step
- Visível apenas em telas lg+ (desktop)

### 3. **Navbar** (Atualizada)

**Localização:** `src/components/navbar/index.tsx`

**Mudanças:**
- Importa e usa o hook `useIntersectionObserver`
- Integra o componente `ProgressStepper`
- Define os steps baseados nas seções da página
- Altura aumentada para lg:h-20 para acomodar o stepper

### 4. **App** (Atualizado)

**Localização:** `src/App.tsx`

**Mudanças:**
- Todas as seções agora estão envolvidas em `<section id="...">` tags
- IDs adicionados: intro, about, what-is, what-is-not, timeline, testimonial, checklist, footer

## 🎨 Customização de Cores

O componente usa as seguintes cores do tema (certifique-se de que estão definidas no Tailwind):

- `brand-sand` - Cor principal do progresso
- `brand-crimson` - Cor de destaque do progresso
- `brand-pearl` - Cor de fundo
- `brand-sienna` - Cor do texto dos tooltips

## 🚀 Como Usar

1. **Adicionar novas seções:**

```tsx
// No App.tsx
<section id="nova-secao">
  <NovoComponente />
</section>
```

2. **Atualizar os steps na Navbar:**

```tsx
// No index.tsx da Navbar
const navLinks = [
  { id: "about", label: "Sobre", href: "#about" },
  { id: "nova-secao", label: "Nova", href: "#nova-secao" }, // Adicionar aqui
];
```

3. **O IntersectionObserver detectará automaticamente a nova seção!**

## ⚙️ Configurações Avançadas

### Ajustar a sensibilidade de detecção:

```typescript
const activeSection = useIntersectionObserver(sectionIds, {
  threshold: 0.5, // 50% da seção deve estar visível
  rootMargin: "-10% 0px -10% 0px", // Área de detecção ajustada
});
```

### Modificar as animações:

No `ProgressStepper.tsx`, ajuste as classes:

```tsx
// Duração da transição
className="transition-all duration-500" // Altere 500 para o valor desejado

// Efeito do ring
className="ring-4 ring-brand-crimson/30" // Ajuste a opacidade
```

## 📱 Responsividade

- **Mobile/Tablet:** O ProgressStepper está oculto (classe `hidden lg:flex`)
- **Desktop (lg+):** Totalmente visível e funcional

Para torná-lo visível em mobile, remova a classe `hidden` e ajuste o layout.

## 🎭 Animações

- **Barra de progresso:** `transition-all duration-500 ease-out`
- **Marcadores:** `transition-all duration-300`
- **Tooltips:** `transition-opacity duration-200`
- **Hover:** `group-hover:scale-150`

## 🧪 Testes Recomendados

1. ✅ Scroll suave entre seções
2. ✅ Detecção correta da seção ativa
3. ✅ Clique nos marcadores navega para a seção correta
4. ✅ Tooltips aparecem no hover e na seção atual
5. ✅ Animações funcionam suavemente
6. ✅ Responsividade em diferentes tamanhos de tela

## 🐛 Troubleshooting

**Problema:** Seções não são detectadas
- **Solução:** Verifique se os IDs das sections no App.tsx correspondem aos IDs no array `sectionIds`

**Problema:** Barra não preenche corretamente
- **Solução:** Certifique-se de que há pelo menos 2 steps e que o cálculo de progresso está correto

**Problema:** Cores não aparecem
- **Solução:** Verifique se as cores customizadas (brand-*) estão definidas no tailwind.config

## 📝 Notas Técnicas

- O IntersectionObserver é eficiente e não causa problemas de performance
- O rootMargin negativo cria uma "zona doce" para detecção mais precisa
- Os steps são acessíveis via keyboard (botões com aria-label)
- O componente é totalmente type-safe com TypeScript
