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
  <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
    <DecoderText text="Hi there" start={visible} delay={500} />
  </Heading>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    I’m Umesh, a passionate and result-driven <strong>Full-Stack Developer</strong> with
    3+ years of experience designing and delivering scalable, high-performance web
    applications. I specialize in{' '}
    <Link href="https://angular.io">Angular</Link>,{' '}
    <Link href="https://react.dev">React</Link>,{' '}
    <Link href="https://nodejs.org">Node.js</Link>,{' '}
    <Link href="https://nextjs.org">Next.js</Link>, and cloud-native development.
    Skilled in frontend UI/UX and backend API integrations, I enjoy building reusable
    components and solving complex problems to deliver enterprise-grade solutions.
  </Text>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    Over the years, I’ve worked across industries including healthcare, government
    systems, and SaaS platforms. I’ve also gained hands-on experience with Docker,
    GitLab, and Bitbucket while collaborating with cross-functional teams. Outside of
    work, I like exploring new frameworks, optimizing performance techniques, and
    staying updated with modern development practices. Always open to exciting
    opportunities, so feel free to drop me a line! If you’re interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
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
