import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a Wordle clone made for the Atrioc community. I hope the one and
        only Brandino "Coffee Cow" Ewing likes it, perchance.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Normal Wordle rules apply.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfkXyhIeh4INH2SbkQ2qnqAPnJ3rtqU_HE4tDuIAxCBLTPN6A/viewform?usp=sf_link"
          className="underline font-bold"
          target={'_blank'}
          rel="noreferrer"
        >
          Provide feedback
        </a>
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
          target={'_blank'}
          rel="noreferrer"
        >
          Original code I yoinked and twisted from
        </a>
      </p>
    </BaseModal>
  )
}
