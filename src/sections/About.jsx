/* Dependencies */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

/* Stylesheets */
import "@/styles/about.css";

export default function About() {
  // TODO: Make this into a hook
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
      <h2 className="h5 title">About</h2>

      <div className="about__inner">
        <div className="inner__top">
          <div className="top__portrait">
            <GatsbyImage
              image={images["portrait.png"]}
              alt="Jacob McMichael"
              placeholder="blurred"
              layout="constrained"
              width={600}
              quality={80}
            />

            <div className="portrait__info">
              <h3 className="title h6 info__title">I'm Jacob McMichael</h3>
              <p>A Frontend Web Developer based in California</p>
            </div>
          </div>
        </div>

        <div className="inner__bottom">
          <div className="bottom__block block--hero">
            <p>Hero Ipsum</p>
            <div className="block__actions">Links here maybe</div>
          </div>

          <div className="bottom__block block--experience">
            <h4 className="title h6">Experience</h4>
            <div className="block__list">
              <div className="block__item button--primary">
                <div className="item__image">
                  <GatsbyImage
                    image={images["drinks-logo.png"]}
                    alt="drinks.com"
                    placeholder="blurred"
                    layout="constrained"
                    width={100}
                    quality={80}
                  />
                </div>
                <div className="item__position">
                  <h5 className="title p">Shopify Developer</h5>
                  <h6 className="title small">@DRINKS</h6>
                </div>
                <span className="p item__date">Feb 2020 - Present</span>
              </div>
              <div className="block__item button--primary">
                <div className="item__image">
                  <GatsbyImage
                    image={images["drinks-logo.png"]}
                    alt="drinks.com"
                    placeholder="blurred"
                    layout="constrained"
                    width={100}
                    quality={80}
                  />
                </div>
                <div className="item__position">
                  <h5 className="title p">Shopify Developer</h5>
                  <h6 className="title small">@DRINKS</h6>
                </div>
                <span className="p item__date">Feb 2020 - Present</span>
              </div>
              <div className="block__item button--primary">
                <div className="item__image">
                  <GatsbyImage
                    image={images["drinks-logo.png"]}
                    alt="drinks.com"
                    placeholder="blurred"
                    layout="constrained"
                    width={100}
                    quality={80}
                  />
                </div>
                <div className="item__position">
                  <h5 className="title p">Shopify Developer</h5>
                  <h6 className="title small">@DRINKS</h6>
                </div>
                <span className="p item__date">Feb 2020 - Present</span>
              </div>
            </div>
          </div>

          <div className="bottom__block block--skills">
            <h4>Skills</h4>
            <div className="block__skills">
              <div className="block__item">Skill 1</div>
              <div className="block__item">Skill 1</div>
              <div className="block__item">Skill 1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
