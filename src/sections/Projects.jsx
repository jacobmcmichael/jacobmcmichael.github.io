/* Dependencies */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
      <div className="projects__header">
        <h2 className="header__title h4 title">Projects</h2>
        <a className="header__link link--with-icon" href="/projects">
          <span>More</span>
          <ArrowRight />
        </a>
      </div>
      <div className="projects__description"></div>
      <div className="projects__layout">
        {projects.map((project, index) => {
          // Find the corresponding image data from the GraphQL query
          const image = images[project.image.replace(/^\//, "")]; // Remove leading slash for matching

          return (
            <div key={index} className="project__card">
              <h3>{project.title}</h3>
              <h4>{project.genre}</h4>

              <ul>
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>

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
            </div>
          );
        })}
      </div>
    </>
  );
}
