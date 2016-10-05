---
layout: default
title:  New portfolio website – Ryan French
post-title:  New portfolio website
date:   2016-10-01
categories: design development news
permalink: /journal/:title/
---

<div class="row">

    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">

        <article class="post-wrapper animated-element--contentfadein">

            <header class="post-header">
                <h2 class="post-header__sub-title animated-element--titlefadeindown">{{ page.date | date: '%B %d, %Y' }}</h2>
                <h1 class="post-header__title animated-element--titlefadeindown">{{ page.post-title }}</h1>
                {% if page.categories %}
                    {% for category in page.categories %}
                        <span class="post-header__category animated-element--contentfadein"><a href="/journal/category/{{ category }}/">{{ category }}</a></span>
                    {% endfor %}
                {% endif %}
            </header>

            <div class="post__content animated-element--contentfadein">

                <p>Welcome to my new personal portfolio site. For the last month or two I have been working on re-designing and building my new portfolio and online journal. I am happy to say that I can finally push this site to production, it's ready! In this post I will discuss some of the design thinking, development technologies and frameworks that went into building this site.</p>

                <p>Let's start with design. I started fresh when I started designing my new portfolio site. In terms of personal identity, I have kept my previous logo because I wanted to keep my brand consistent with the past but keep my new portfolio fresh. The old portfolio can be seen in the image below:</p>

                <img src="/assets/images/journal/old-portfolio.jpg" />

                <p>The grid I have chosen is a fluid 12 column grid which allowed me to design at specific breakpoints for mobile devices. The layout on large desktop devices has plenty of white space to aid in making the content easy to digest. When the viewport is below small tablets, the white space tightens up and screen space is used more efficiently so more can be displayed.</p>

                <img src="/assets/images/journal/grid.jpg" />

                <p>The color palette I have chosen is very simple. With 3 variants of grey for background colors, a body color for text and an alternate orange color to compliment the other colors. There are also some small variations of the 3 greys in shades or highlights. There are two typefaces used on my site, Proxima Nova and FF Meta. Proxima Nova comes in two weights, medium and bold. FF Meta comes in two weights, regular and light.</p>

                <img src="/assets/images/journal/colors-typography.jpg" />

                <p>Now let's discuss the technology behind my portfolio. I set out with the goal of optimizing my site for speed and performance while still maintaining great design and usability. I have built this using the <a target="_blank" href="https://jekyllrb.com/">Jekkyl framework</a> which is a static site generator with built-in blog functionality. This allowed me to get up and running fast with a clean codebase. </p>

                <p>I'm using <a target="_blank" href="http://sass-lang.com/">Sass</a> as a css pre-processor. This allows me to write clean and modular css with minimal effort and keep things clean until the css is compiled. Each of the css components are split into partials like _tile.scss then imported into the main stylesheet. Modularizing the css allows me to quickly edit the css for a component without breaking or cascading styles into some other object.</p>

                <p>The grid system I have chosen to use is the <a target="_blank" href="http://flexboxgrid.com/">Flexbox Grid</a>. Flexbox Grid is a fluid grid which is needed because I am developing this site to support a wide range of devices. The screen adapts to each viewport size. The grid has breakpoints for large screens, desktop, tablet, small-tablet and mobile. The grid system is also built on the display: flex technology now implemented in most modern browsers. It is much more performant and less bloated css.</p>

                <p>I use <a target="_blank" href="https://mango.github.io/slideout/">Slideout</a> on when on mobile devices as a mobile friendly slide out menu. This allows the user to use touch actions to slide out a mobile menu from the right hand side of the viewport, making it easier to navigate on mobile devices.</p>

                <p>The transitions between pages were done using <a target="_blank" href="https://github.com/miguel-perez/smoothState.js">Smoothstate</a>. This allowed me to create quick transitions between page loads to let the user know that the content is changing or loading. It also helps mask any loading time between pages. The transitions used are css transitions from <a target="_blank" href="https://daneden.github.io/animate.css/">Slideout</a> which is a css animation library. </p>

                <p>I hope this article gives a bit of insight into the design and development of my new portfolio. Hopefully there is some knowledge I can pass on or libraries or plugins you might want to use on your next project. Feel free to take a look at the rest of the site. If you like what you have seen here or want to know more about me or my portfolio, please contact me at <a href="mailto:ryan.lloyd.french@gmail.com">ryan.lloyd.french@gmail.com</a>. I'm currently looking for new job opportunities.</p>

                <p>Cheers,<br>Ryan.</p>

            </div>

        </article>

    </div>

</div>
