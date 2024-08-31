/* Dependencies */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

/* Components */
import EntranceAnimation from "@/components/EntranceAnimation";
import ScaleOnHover from "@/components/ScaleOnHover";
import { ArrowRight } from "@/components/Icons";

/* Data */
import projects from "@/data/projects.json";

/* Stylesheets */
import "@/styles/projects.css";

export default function Projects() {
  // Use the `useStaticQuery` hook to fetch image data
  const data = useStaticQuery(graphql`
    query MyProjectImages {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                width: 600
                quality: 80
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  // Create a mapping of image filenames to their data
  const images = data.allFile.edges.reduce((acc, { node }) => {
    acc[node.relativePath] = getImage(node.childImageSharp.gatsbyImageData);
    return acc;
  }, {});

  return (
    <>
      <div className="projects__top themed">
        <div className="projects__header">
          <h2 className="header__title h5 title">Projects</h2>
          <ScaleOnHover>
            <a className="header__link link--with-icon" href="/projects">
              <span>More</span>
              <ArrowRight />
            </a>
          </ScaleOnHover>
        </div>

        <p className="projects__description constrain">
          As a web developer, I've had the opportunity to contribute to a
          diverse range of websites, crafting user-friendly interfaces,
          optimizing performance, and adding dynamic features. Below are some of
          the websites where I've applied my skills.
        </p>
      </div>

      <div className="projects__layout">
        {projects.map((project, index) => {
          // Find the corresponding image data from the GraphQL query
          const image = images[project.image.replace(/^\//, "")]; // Remove leading slash for matching

          return (
            <EntranceAnimation key={index}>
              <div className="project__card themed">
                {image ? (
                  <GatsbyImage
                    image={image}
                    alt={project.title}
                    placeholder="blurred"
                    layout="constrained"
                    width={600}
                    quality={80}
                  />
                ) : (
                  <p>Image not found</p>
                )}

                <div className="card__header">
                  <h3 className="subtitle h6 card__title">{project.title}</h3>
                  <h4 className="subtitle h6 card__subtitle">
                    {project.genre}
                  </h4>
                </div>

                <ul className="card__tags">
                  {project.tags.map((tag, index) => (
                    <li key={index} className="small">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </EntranceAnimation>
          );
        })}
      </div>
    </>
  );
}
