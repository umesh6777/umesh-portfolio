// Slice project assets (all in public folder)
const sliceAnnotationLarge = "/slice-annotation-large.png";
const sliceAnnotationPlaceholder = "/slice-annotation-placeholder.png";
const sliceAnnotation = "/slice-annotation.png";

const sliceAppLarge = "/slice-app-large.jpg";
const sliceAppPlaceholder = "/slice-app-placeholder.jpg";
const sliceApp = "/slice-app.jpg";

const sliceBackgroundBarLarge = "/slice-background-bar-large.jpg";
const sliceBackgroundBarPlaceholder = "/slice-background-bar-placeholder.jpg";
const sliceBackgroundBar = "/slice-background-bar.jpg";

const sliceBackgroundLarge = "/slice-background-large.jpg";
const sliceBackgroundPlaceholder = "/slice-background-placeholder.jpg";
const sliceBackground = "/slice-background.jpg";

const sliceIrlPlaceholder = "/slice-irl-placeholder.jpg";
const sliceIrl = "/slice-irl.jpg";

const sliceSidebarAnnotationsLarge = "/slice-sidebar-annotations-large.png";
const sliceSidebarAnnotationsPlaceholder = "/slice-sidebar-annotations-placeholder.png";
const sliceSidebarAnnotations = "/slice-sidebar-annotations.png";

const sliceSidebarLayersLarge = "/slice-sidebar-layers-large.png";
const sliceSidebarLayersPlaceholder = "/slice-sidebar-layers-placeholder.png";
const sliceSidebarLayers = "/slice-sidebar-layers.png";

const sliceSlidesLarge = "/slice-slides-large.jpg";
const sliceSlidesPlaceholder = "/slice-slides-placeholder.jpg";
const sliceSlides = "/slice-slides.jpg";

// JS/JSX imports stay the same
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Alfred';
const description =
  'Alfred is a smart personal assistant platform designed to simplify task management, streamline workflows, and boost productivity.';
const roles = ['User Research', 'UX Design', 'Interface Design'];


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://avitgihealth-claim-ui.artivatic.ai/auth/login"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Users needed a better way to organize and manage their daily tasks. Before
                Alfred, task tracking was scattered across multiple tools, making it
                difficult to stay on top of priorities.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to create a unified assistant where tasks, reminders, and
                collaboration could all happen in one place, reducing friction and improving
                focus.
              </ProjectSectionText>

            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                A common issue was finding old tasks or remembering what was pending. To
                solve this, we added a timeline view and a favorites option so users could
                quickly access important tasks and revisit completed ones with ease.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                Task management is more than just creating to-dos. Alfred provides meaningful
                context like due dates, priority levels, and progress indicators, helping
                users understand scale and stay aligned with their goals.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Alfred made it easier for individuals and teams to manage their work without
                feeling overwhelmed. Real-time updates and smart reminders improved
                collaboration, while feedback showed users enjoyed the simplicity and
                efficiency of the assistant.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
