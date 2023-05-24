/* eslint-disable prettier/prettier */
import style from './index.module.css'

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'
import ImageTrigger from 'components/ImageTrigger'
import Square from 'components/Square'
import Heading from 'components/Heading'
import { List, ListItem } from 'components/List'

// Hooks
import { Trans, useTranslation } from 'react-i18next'

type Intro = {
  title: string
  description: string
}

function About() {
  const { t } = useTranslation('translation', { keyPrefix: 'about' })
  const intro: Intro[] = t('intro', { returnObjects: true })
  const methodTitle: string = t('method_title')
  const method: string[] = t('method', { returnObjects: true })

  return (
    <Section name="about" className={style.root}>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock>
            {intro.map(({ title, description }, i) => (
              <div key={i}>
                <br />
                <Heading key={`about.intro.${i}.title`}>{title}</Heading>
                <Trans
                  i18nKey={`about.intro.${i}.description`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />
                  }}
                />
              </div>
            ))}
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key={methodTitle}>
              <Trans i18nKey="about.method_title" components={{ pre: <pre /> }} />
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key={intro[2]}>
            {method.map((txt, i) => (
              <div key={i}>
                <br />
                <Trans
                  i18nKey={`about.method.${i}`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />
                  }}
                />
              </div>
            ))}
          </ContentBlock>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={3}>
          <ContentBlock>
            <List>
              <ListItem end="World's youngest">Microsoft Azure AI Certified</ListItem>
              <ListItem end="India's youngest">Microsoft PL-900 Certified</ListItem>
              <ListItem end="By Intel">AI 4 Youth</ListItem>
              {/* <ListItem end="x3">iF Design Award</ListItem>
              <ListItem end="x8">Other</ListItem> */}
            </List>
          </ContentBlock>
        </Row>
      </Container>
    </Section>
  )
}
export default About
