import { Cell } from '../grid/Cell'
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

      <p className="text-sm mt-6 text-gray-500 dark:text-gray-300">
        This is a Wordle clone made for the Atrioc community. I hope the one and
        only Brandino "Coffee Cow" Ewing likes it, perchance.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="L" />
        <Cell value="D" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="R" />
        <Cell value="O" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="T" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfkXyhIeh4INH2SbkQ2qnqAPnJ3rtqU_HE4tDuIAxCBLTPN6A/viewform?usp=sf_link"
          className="underline font-bold"
          target={'_blank'}
          rel="noreferrer"
        >
          Provide feedback or suggest/remove a word
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

      <p className="mt-6 text-xs text-gray-500 dark:text-gray-300">
        Thanks to tato for coming up with the name and Oxy for being an awesome person.
      </p>
    </BaseModal>
  )
}
