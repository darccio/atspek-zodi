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
        Tai atvirojo kodo žaidimo “***REMOVED***” klonas.{' '}
        <a
          href="https://github.com/imdario/***REMOVED***-lt"
          className="underline font-bold"
        >
          Atvirąjį kodą rasite čia
        </a>
        ,{' '}
        <a
          href="https://www.powerlanguage.co.uk/***REMOVED***/"
          className="underline font-bold"
        >
          originalią žaidimo versiją galite išbandyti čia
        </a>
        {'.'}
      </p>
    </BaseModal>
  )
}
