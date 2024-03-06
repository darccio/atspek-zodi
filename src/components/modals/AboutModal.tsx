import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Papildoma informacija"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500">
        Tai atvirojo kodo žaidimo "Žaidimas, kurio nereikėtų pavadinti" klonas
        {'.'}
      </p>
    </BaseModal>
  )
}
