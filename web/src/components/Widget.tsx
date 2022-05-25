import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

import { WidgetForm } from './WidgetForm'

export function Widget() {
  return (
    <Popover className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-max transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}

/* 
  o group do tailwind transforma os elementos em um grupo so, exemplo nesse caso aqui quando passar o mouse no botão da para fazer uso do evento hover em outros elementos que estão dentro do group

  O headlessui e uma biblioteca que ajuda com a acessibilidade tipo caso a pessoa queira navegar pelos elementos pelo teclado vc teria que fazer tudo na mão ja com essas bibliotecas elas gerenciam e controlam os estados do componente e. se esta aberto ou fechado enfim ver mais sobre depois  

  ver a doc de como usar no caso do popover: e essa https://headlessui.dev/react/popover

  - Popover e o elemento que vai por volta e tipo um container 
  - Popover.Button fica responsável pela ação de abrir e fechar 
  - Popover.Panel e o conteúdo que vai aparecer e sumir quando clicar no Popover.Button
*/
