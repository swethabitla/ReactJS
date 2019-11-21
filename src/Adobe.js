import React, { Component } from "react";
import "./index.css";

class Adobe extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>Adobe Inc.</h1>
        <p>Adobe Inc. is an American multinational computer software company headquartered in San Jose, California. It has historically focused upon the creation of multimedia and creativity software products, with a more recent foray towards digital marketing software. Adobe is best known for its Adobe Flash web software ecosystem, Photoshop image editing software, Adobe Illustrator vector graphics editor, Acrobat Reader, the Portable Document Format (PDF), and Adobe Creative Suite, as well as its successor Adobe Creative Cloud.
        </p>
        <img src={require('./images/adobe.jpg')}></img>
        <p>Adobe was founded in December 1982 by John Warnock and Charles Geschke, who established the company after leaving Xerox PARC in order to develop and sell the PostScript page description language. In 1985, Apple Computer licensed PostScript for use in its LaserWriter printers, which helped spark the desktop publishing revolution.

As of 2019, Adobe has more than 21,000 employees worldwide, about 40% of whom work in San Jose. Adobe also has major development operations in Newton, Massachusetts; New York City, New York; Minneapolis, Minnesota; Lehi, Utah; Seattle, Washington; and San Francisco, California in the United States. It also has major development operations in Noida and Bangalore in India.
        </p>
        <h2>History of the Company</h2>
        <p>The company was started in John Warnock's garage. The name of the company, Adobe, comes from Adobe Creek in Los Altos, California, which ran behind Warnock's house. Adobe's corporate logo features a stylized "A" and was designed by Marva Warnock, graphic designer and John Warnock's wife.

Steve Jobs attempted to buy the company for five million dollars in 1982, but Warnock and Geschke refused. Their investors urged them to work something out with Jobs, so they agreed to sell him shares worth 19 percent of the company. Jobs paid a five-times multiple of their company's valuation at the time, plus a five-year license fee for PostScript, in advance. The purchase and advance made Adobe the first company in the history of Silicon Valley to become profitable in its first year.

Warnock and Geschke considered various business options including a copy-service business and a turnkey system for office printing. Then they chose to focus on developing specialized printing software and created the Adobe PostScript page description language.</p>
                  <h2>Founding of Adobe</h2>
                  <p>The company was founded in 1982 by John Warnock and Charles Geschke. While employed at Xerox Corporation’s Palo Alto (California) Research Center (PARC), the two computer scientists had developed a programming language specially designed to describe the precise position, shape, and size of objects on a computer-generated page. This page description language, later known as PostScript, described such objects as letters and graphics in mathematical terms, without reference to any specific computer or printer; any device capable of interpreting the language would be able to generate a representation of the page at any resolution the device supported. When Xerox declined to bring the technology to market, Warnock and Geschke formed their own company to do so, naming it after a creek near their homes.</p>
                  <h2>Font Wars</h2>
                  <p>Adobe made its initial public stock offering in 1986. Although revenues grew to $168.7 million by 1990, Adobe’s relations with Apple deteriorated in the late 1980s over PostScript licensing fees, and in 1989 Apple announced plans to sell its Adobe stock, collaborate with Microsoft Corporation on development of an enhanced PostScript clone, and introduce a new font-rendering technology of its own, called TrueType. For more than a year the dispute, known as the font wars, roiled the computer and publishing worlds before Apple and Adobe reached a compromise. In the wake of the agreement, Microsoft abandoned its PostScript clone and adopted TrueType for its Windows operating systems.</p>
        <h2>Application Software</h2>
        <p>During the 1990s Adobe’s revenues from PostScript licensing continued to increase, as did its sales of PostScript fonts; by the end of 1998 the Adobe Type Library encompassed more than 2,500 typefaces. An ever-larger share of the company’s revenues, however, came from sales of application software, initially for the Macintosh platform but later also for the UNIX and Windows operating systems. The first such application, introduced in 1987, was Adobe Illustrator, a PostScript-based drawing package for artists, designers, and technical illustrators. Adobe Photoshop, an application for retouching digitized photographic images, followed three years later and quickly became Adobe’s most successful program. It was one of the first commercial applications with an interface enabling outside developers to make new features available through plug-ins within the main program; scores of developers took advantage of this “open architecture,” helping to cement Photoshop’s dominance within its category.</p>
        <h2>Adobe Creative Cloud</h2>
        <p>Creative Cloud is a collection of 20+ desktop and mobile apps and services for photography, design, video, web, UX and more. Now you can take your ideas to new places with Photoshop on the iPad, draw and paint with Fresco, and design for 3D and AR. Join our global creative community — and make something better together.</p>
                   <img src={require('./images/cc.png')}></img>
        <h2>Packages</h2>
                  <p>Adobe offers four tiers of the Creative Cloud subscription service for individuals (there are other types for Business and Schools):</p>
        <ul>
        <li><strong>Photography</strong>, which contains some photography-related features of Adobe Creative Cloud and access to Photoshop CC and Lightroom CC.</li>
<li><strong>Single App</strong>, which contains all the features of Creative Cloud plus access to a single application of the user's choice in the suite out of a list of 11 selected applications.</li>
<li><strong>All Apps</strong>, the main tier of Creative Cloud that contains all the features of Creative Cloud plus access to all applications within the suite.</li>
<li><strong>All Apps + Adobe Stock</strong>, which contains all the standard features of Creative Cloud plus features for Adobe Stock.</li>
              </ul>    
      </div>
    );
  }
}

export default Adobe;
