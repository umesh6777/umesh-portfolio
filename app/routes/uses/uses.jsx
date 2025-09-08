import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
    description="Here’s a detailed list of tools, apps, and hardware I rely on daily for Angular development, UI/UX work, and freelancing projects."
        />
  <ProjectSection padding="none" className={styles.section}>
    <ProjectSectionContent>
      <ProjectTextRow width="m">
        <ProjectSectionHeading>Design</ProjectSectionHeading>
        <ProjectSectionText as="div">
          <List>
            <ListItem>
              <Link href="https://www.figma.com">Figma</Link> is my main design tool for
              UI/UX wireframes, prototypes, and collaboration. It helps me move quickly
              from concept to working design.
            </ListItem>
            <ListItem>
              For creating custom illustrations, banners, or visual polish I use{' '}
              <Link href="https://www.adobe.com/in/products/photoshop.html">
                Adobe Photoshop
              </Link>.
            </ListItem>
            <ListItem>
              When I need vector graphics or logos,{' '}
              <Link href="https://www.adobe.com/in/products/illustrator.html">
                Illustrator
              </Link>{' '}
              is my go-to.
            </ListItem>
          </List>
        </ProjectSectionText>
      </ProjectTextRow>
    </ProjectSectionContent>
  </ProjectSection>
  <ProjectSection padding="none" className={styles.section}>
    <ProjectSectionContent>
      <ProjectTextRow width="m">
        <ProjectSectionHeading>Development</ProjectSectionHeading>
        <ProjectSectionText as="div">
          <List>
            <ListItem>
              I use <Link href="https://code.visualstudio.com/">VS Code</Link> as my
              primary editor with useful extensions for Angular, Git, and productivity.
            </ListItem>
            <ListItem>
              <Link href="https://angular.io/">Angular</Link> is my core framework for
              building scalable web apps. Along with it, I frequently use{' '}
              <Link href="https://rxjs.dev/">RxJS</Link> and{' '}
              <Link href="https://ngrx.io/">NgRx</Link>.
            </ListItem>
            <ListItem>
              For backend and APIs I work with{' '}
              <Link href="https://expressjs.com/">Express.js</Link> and Node.js.
            </ListItem>
            <ListItem>
              For styling I rely on <Link href="https://getbootstrap.com/">Bootstrap</Link>{' '}
              and <Link href="https://tailwindcss.com/">Tailwind CSS</Link> depending on
              project needs.
            </ListItem>
            <ListItem>
              For animations I often use{' '}
              <Link href="https://www.framer.com/motion/">Framer Motion</Link> (React) or
              Angular’s built-in animation module.
            </ListItem>
            <ListItem>
              Version control is handled through{' '}
              <Link href="https://git-scm.com/">Git</Link> with{' '}
              <Link href="https://bitbucket.org/">Bitbucket</Link> and GitHub for repo
              management.
            </ListItem>
          </List>
        </ProjectSectionText>
      </ProjectTextRow>
    </ProjectSectionContent>
  </ProjectSection>
  {/* System Section */}
  <ProjectSection padding="none" className={styles.section}>
    <ProjectSectionContent>
      <ProjectTextRow stretch width="m">
        <ProjectSectionHeading>System</ProjectSectionHeading>
        <Table>
          <TableBody>
            <TableRow>
              <TableHeadCell>Laptop</TableHeadCell>
              <TableCell>Windows Laptop (16GB RAM, i7 Processor)</TableCell>
            </TableRow>
            <TableRow>
              <TableHeadCell>Operating system</TableHeadCell>
              <TableCell>Windows 11</TableCell>
            </TableRow>
            <TableRow>
              <TableHeadCell>Browser</TableHeadCell>
              <TableCell>Google Chrome / Firefox Developer Edition</TableCell>
            </TableRow>
            <TableRow>
              <TableHeadCell>Monitor</TableHeadCell>
              <TableCell>24″ Full HD External Monitor</TableCell>
            </TableRow>
            <TableRow>
              <TableHeadCell>Keyboard</TableHeadCell>
              <TableCell>Mechanical Keyboard (Red Switch)</TableCell>
            </TableRow>
            <TableRow>
              <TableHeadCell>Mouse</TableHeadCell>
              <TableCell>Logitech Wireless</TableCell>
            </TableRow>
            <TableRow>
              <TableHeadCell>Headphones</TableHeadCell>
              <TableCell>Boat Wireless / JBL Wired</TableCell>
            </TableRow>
            <TableRow>
              <TableHeadCell>Microphone</TableHeadCell>
              <TableCell>Inbuilt Laptop Mic / External USB Mic (when needed)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ProjectTextRow>
    </ProjectSectionContent>
  </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
