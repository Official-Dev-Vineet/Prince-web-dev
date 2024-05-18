import "./Marquee.css";
import PropTypes from "prop-types";

const Marquee = ({ text }) => {
  const marqueeText = [
    `“Your website is the center of your digital ecosystem, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.” - Leland Dieno`,
    `“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away” - Antonie De-Saint Exupery
    `,
    `“Website without visitors is like a ship lost in the horizon.” - Dr. Christopher Dayagdag`,
    `“Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.” - Bill Gates`,
    `“A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or products you offer. Collect Contact details for future ongoing relation.” - Mohamed Saad`,
    `“Responsive Web Design always plays an important role whenever going to promote your website.” - Josh Wilson
    `,
    `“If You Think Math is Hard Try Web Design.” - Pixxelznet`,
    `“The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.” - Paul Rand`,
    `“There are three responses to a piece of design - yes, no, and WOW! Wow is the one to aim for” - Milton Glaser
    `,
    `“Learning to code is useful no matter what your career ambitions are.” - Arianna Huffington, Founder, The Huffington Post`,
    `“Whether we're fighting climate change or going to space, everything is moved forward by computers, and we don't have enough people who can code. Teaching young people to code early on can help build skills and confidence and energize the classroom with learning-by-doing opportunities.” - Richard Branson, Founder, Virgin Group`,
    `“Reusability is key in reducing bugs and coding quickly. The more I use a piece of code, the more confident and familiar I become with it, which in turn significantly speeds up my development time.” - Robert Duchnik`,
    `“With the support of our vibrant web developer community and dedicated partners, our goal is to level the playing field and usher in an explosion of content and services that will meet the diverse needs of the next two billion people online.” - Gary Kovacs`,
    `“A good standalone plugin can also make you a fair amount of money. Many developers make a decent living by simply maintaining and updating one or two crucial plugins that are far better than anything available for free.” - Robert Duchnik`,
    `“Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.” - N.J. Rubenking`,
    `“As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow.” - Doug McIlroy
    `,
    `“Most sites need to prevent breadth - many many pages that are organized cohesively. A site that presents a single webpage is unlikely to present sufficient depth of content to justify extensive SEO.” - Harold Davis`,
    `“If you want a great site, you've got to test. After you've worked on a site for even a few weeks, you can't see it fresh anymore. You know too much. The only way to find out if it really works is to test it.” - Steve Krug`,
    `“The problem is there are no simple 'right' answers for most Web design questions (at least not for the important ones). What works is good, integrated design that fills a need - carefully thought out, well-executed, and tested.” - Steve Krug
    `,
    `“To become successful online, you only need to remember the following : Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success” - Dr. Christopher Dayagdag`,
    `“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.” - Dan Salomon`,
    `“Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.” - Eagleson's Law`,
    `“Your most unhappy customers are your greatest source of learning.” - Bill Gates
    `,
    `“If you're already a front-end developer, well, pretend you're also wearing a pirate hat.” - Ethan Marcotte
    `,
  ];
  const index = Math.floor(Math.random() * marqueeText.length);
  const duration = text ? text.length / 2 : marqueeText[index].length / 2;
  return (
    <div className="marquee">
      <div className="track" style={{ animationDuration: `${duration}s` }}>
        <div className="content">
          {text ? text : <>&nbsp;{marqueeText[index]}</>}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
Marquee.propTypes = {
  text: PropTypes.string,
};
