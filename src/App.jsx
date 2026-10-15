import { useState } from 'react'
import content from './data/content.json'
import Hero from './components/Hero/Hero'
import TextBlock from './components/TextBlock/TextBlock'
import EditorialBlock from './components/EditorialBlock/EditorialBlock'
import ImageDuo from './components/ImageDuo/ImageDuo'
import ContestSection from './components/ContestSection/ContestSection'
import Modal from './components/Modal/Modal'
import SignupForm from './components/SignupForm/SignupForm'
import Header from './components/Header/Header'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Header {...content.header} />
      <main>
        <Hero {...content.hero} />
        <TextBlock {...content.intro} />
        <EditorialBlock {...content.editorial} />
        <ImageDuo {...content.imageDuo} />
        <ContestSection
          {...content.contest}
          onCtaClick={() => setIsModalOpen(true)}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={content.signup.title}
        >
          <SignupForm
            text={content.signup.text}
            submitLabel={content.signup.submitLabel}
            successMessage={content.signup.successMessage}
          />
        </Modal>
      </main>
    </>
  )
}

export default App