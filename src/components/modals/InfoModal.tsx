import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Žaidimo taisyklės"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500">
        Atspėk ***REMOVED*** iš 6 kartų. Po kiekvieno spėjimo langelių spalva pasikeis
        ir parodys kiek teisingas buvo tavo spėjimas.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" status="correct" />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="A" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500">
        B raidė šiame žodyje yra. Jos vietą langelyje atspėjote teisingai.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="O" />
        <Cell value="R" status="present" />
        <Cell value="A" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500">
        R raidė šiame žodyje yra, tačiau jos vieta langelyje neteisinga.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" />
        <Cell value="O" />
        <Cell value="V" />
        <Cell value="A" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500">
        A raidės šiame žodyje nėra nė viename langelyje.
      </p>
    </BaseModal>
  )
}
