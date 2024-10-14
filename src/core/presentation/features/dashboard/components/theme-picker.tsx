import { Button } from 'primereact/button'
import { ListBox } from 'primereact/listbox'
import { useEffect, useState } from 'react'
import { Panel } from 'primereact/panel'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Tag } from 'primereact/tag'
import { Ripple } from 'primereact/ripple'
import { Chip } from 'primereact/chip'
import { BlockUI } from 'primereact/blockui'
import { ElementType } from '@/core/types/element-type'
import { THEMES } from '@/core/contants/themes'
import { UseChangeTheme } from '@/core/hooks/change-theme'

export const ThemePicker = () => {
  const { handleThemeChange } = UseChangeTheme()
  const [theme, setTheme] = useState<ElementType<typeof THEMES>>('viva-dark')
  const [blocked, setBlocked] = useState(false)
  const renderThemeList = () => {
    return (
      <ListBox
        options={[...THEMES]}
        onChange={(e) => setTheme(e.value)}
        value={theme}
      />
    )
  }

  useEffect(() => {
    handleThemeChange(theme)
  }, [theme, handleThemeChange])

  return (
    <div>
      <div>
        {renderThemeList()}
        <Button label="Cambiar tema" onClick={() => handleThemeChange(theme)} />
      </div>
      <div>
        <div>sidebar</div>
        <div>content</div>
        <Panel header="Header">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Panel>
        <Accordion activeIndex={0}>
          <AccordionTab header="Header I">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionTab>
          <AccordionTab header="Header II">
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </AccordionTab>
        </Accordion>
        <Tag value="Primary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warning" value="Warning"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
        <Tag severity="secondary" value="Secondary"></Tag>
        <Tag severity="contrast" value="Contrast"></Tag>
      </div>
      <div className="bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold p-ripple">
        Click Me
        <Ripple />
      </div>
      <Chip label="Apple" icon="pi pi-apple" />
      <Chip label="Facebook" icon="pi pi-facebook" />
      <Chip label="Google" icon="pi pi-google" />
      <Chip label="Microsoft" icon="pi pi-microsoft" removable />

      <div className="card">
        <div className="mb-3">
          <Button
            label="Block"
            onClick={() => setBlocked(true)}
            className="mr-2"
          ></Button>
          <Button
            label="Unblock"
            onClick={() => setBlocked(false)}
            severity="secondary"
          ></Button>
        </div>
        <BlockUI blocked={blocked}>
          <Panel header="Basic">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </BlockUI>
      </div>
    </div>
  )
}
