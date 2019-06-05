import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../images/hero.png";
import thumbnailEvent from "../images/feature-event.png"
import thumbnailBoard from "../images/feature-board.png"
import thumbnailNews from "../images/feature-news.png"
import thumbnailTeams from "../images/feature-team.png"
import thumbnailStaff from "../images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"primary-feature"}>
            <h1>Make your Staff and Workspace Happy</h1>
            <p>HiStaff gives your complex the opportunity to increase the percentage of happiness<br/>and enjoyment of
                your staff and as a result, bring productivity to your workspace.</p>
            <img src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"second-feature"}>
                <div className={"thumbnail"}>
                    <img src={thumbnailEvent}/>
                </div>

                <div className={"content"}>
                    <h2>Create and Join Events</h2>
                    <p>Save your time and energy by letting HiStaff to manage your events (handle the colleague’s
                        birthday, gathering, etc.)</p>
                </div>
            </div>

            <div className={"second-feature"}>
                <div className={"content"}>
                    <h2>Public Board</h2>
                    <p>Let the staff write down on the board freely,<br/>Joking with each other and writing cool content
                        can make the workplace more diverse and attractive for employees. </p>
                </div>

                <div className={"thumbnail"}>
                    <img src={thumbnailBoard}/>
                </div>
            </div>

            <div className={"second-feature"}>
                <div className={"thumbnail"}>
                    <img src={thumbnailNews}/>
                </div>

                <div className={"content"}>
                    <h2>Internal News</h2>
                    <p>Get rid of sending news by e-mail and its problems; post the news in an internal and attractive
                        format via HiStaff instead.</p>
                </div>
            </div>

            <div className={"second-feature"}>
                <div className={"content"}>
                    <h2>Teams</h2>
                    <p>HiStaff let you add staff in specific teams and manage them easily.</p>
                </div>

                <div className={"thumbnail"}>
                    <img src={thumbnailTeams}/>
                </div>
            </div>

            <div className={"second-feature"}>
                <div className={"thumbnail"}>
                    <img src={thumbnailStaff}/>
                </div>

                <div className={"content"}>
                    <h2>Staff management</h2>
                    <p>Discard traditional ways to archive staff documents and information, and try new ways to store
                        and archive them in HiStaff easily.</p>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"content"}>
                    <h2>Sign up for free</h2>
                    <p>Sign up and start improving the Human Resources management of your business with Factorial.</p>
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
