import type { Schema, Attribute } from '@strapi/strapi';

export interface ExperienceExperienceAction extends Schema.Component {
  collectionName: 'components_experience_experience_actions';
  info: {
    displayName: 'ExperienceAction';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    details: Attribute.Blocks;
  };
}

export interface ResumeEducation extends Schema.Component {
  collectionName: 'components_resume_educations';
  info: {
    displayName: 'education';
    icon: 'write';
  };
  attributes: {
    title: Attribute.String;
    date_graduated: Attribute.Date;
    qualification: Attribute.String;
  };
}

export interface ResumeExperience extends Schema.Component {
  collectionName: 'components_resume_experiences';
  info: {
    displayName: 'Experience';
    icon: 'eye';
  };
  attributes: {
    experience: Attribute.Relation<
      'resume.experience',
      'oneToOne',
      'api::experience.experience'
    >;
  };
}

export interface ResumeHeader extends Schema.Component {
  collectionName: 'components_resume_headers';
  info: {
    displayName: 'Header';
    icon: 'book';
  };
  attributes: {
    name: Attribute.String;
    contact_number: Attribute.String;
    email: Attribute.Email;
    github_username: Attribute.String;
    linkedin_username: Attribute.String;
  };
}

export interface ResumeSkillCategory extends Schema.Component {
  collectionName: 'components_resume_skill_categories';
  info: {
    displayName: 'SkillCategory';
    icon: 'chartPie';
  };
  attributes: {
    title: Attribute.String;
    skills: Attribute.Relation<
      'resume.skill-category',
      'oneToMany',
      'api::skill.skill'
    >;
  };
}

export interface ResumeSkills extends Schema.Component {
  collectionName: 'components_resume_skills';
  info: {
    displayName: 'Skills';
    icon: 'crown';
  };
  attributes: {
    category: Attribute.Component<'resume.skill-category', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'experience.experience-action': ExperienceExperienceAction;
      'resume.education': ResumeEducation;
      'resume.experience': ResumeExperience;
      'resume.header': ResumeHeader;
      'resume.skill-category': ResumeSkillCategory;
      'resume.skills': ResumeSkills;
    }
  }
}
