import Skill from './components/Skill';
import Projects from './components/Projects';
interface SanityBody {
  _createdAt: string,
  _id:        string,
  _rev:       string,
  _updatedAt: string,
}

interface Image{
  _type:    "image"
  asset:{
    _ref:   string
    _type:  "reference"
  } 
}

export interface PageInfo extends SanityBody {
  _type:                  "pageInfo",
  backgroundInformation:  string,
  email:                  string,
  role:                   string,
  heroImage:              Image,
  name:                   string,
  profilePic:             Image,
  //socials
}

export interface Technology extends SanityBody{
  _type:  "skill",
  image:  Image,
  title:  string,
}

export interface Skill extends SanityBody{
  _type:  "skill",
  image:  Image,
  title:  string,
}

export interface Project extends SanityBody{
  _type:        "project",
  image:        Image,
  title:        string,
  linkToBuild:  string,
  summary:      string,
  technologies: Technology[],
}

export interface Experience extends SanityBody {
  _type:                  "experience",
  company:                string,
  companyImage:           Image,
  dateEnded:              date,
  dateStarted:            date,
  isCurrentlyWorkingHere: boolean,
  jobTitle:               string,
  points:                 string[],
  technologies:           Technology[],
}

export interface Social extends SanityBody {
  _type:      "social",
  title:      string,
  url:        string
}