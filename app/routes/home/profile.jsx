// Images from public folder
const profileImgLarge = "/profile-large.jpg";
const profileImgPlaceholder = "/profile-placeholder.jpg";
const profileImg = "/profile.jpg";
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';


const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading
      className={styles.title}
      data-visible={visible}
      level={3}
      id={titleId}
    >
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Umesh, a <strong>Frontend Developer</strong> with over{' '}
      <strong>2+ years of experience</strong> building scalable web applications.
      I work primarily with{' '}
      <Link href="https://angular.io">Angular</Link> and{' '}
      <Link href="https://react.dev">React</Link>, along with JavaScript, HTML, and CSS,
      focusing on clean UI development and reusable components.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I have hands-on experience integrating REST APIs, building forms and
      data-driven screens, and maintaining stable frontend applications.
      I’ve worked on projects across healthcare, government systems, and SaaS
      platforms, collaborating with backend and QA teams in Agile environments.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I enjoy improving UI performance, maintaining clean code, and continuously
      learning modern frontend practices. Always open to new opportunities—feel free
      to reach out. If you’re interested in the tools I use, you can check out my{' '}
      <Link href="/uses">uses page</Link>.
    </Text>
  </Fragment>
);



export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
