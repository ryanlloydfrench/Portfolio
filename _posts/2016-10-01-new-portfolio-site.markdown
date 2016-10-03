---
layout: default
title:  New portfolio site – Ryan French
post-title:  New portfolio site
date:   2016-10-01
categories: design
permalink: /journal/:title/
---

<div class="row">

    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">

        <article>

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

                <img src="https://placeimg.com/1200/480/nature" />

                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ut placerat nisl, eu tristique augue. Quisque vel mauris nisi. Donec sollicitudin porttitor est, id iaculis nisi. Phasellus molestie mi sed <a>velit volutpat</a>, id congue tortor varius. Sed pretium est sit amet elit dapibus cursus. In a consectetur nulla, non imperdiet ex. Donec sed orci enim. Proin a placerat diam, ut iaculis lacus. Donec mollis fringilla pulvinar. Aenean odio ligula, vulputate vel risus nec, vehicula hendrerit mi. Proin iaculis suscipit pharetra.</p>

                <p>Aenean auctor, elit non feugiat varius, sem libero feugiat nulla, nec pharetra nibh turpis ac nisl. Donec dignissim nibh quis ligula blandit blandit. Etiam sodales libero sit amet porttitor rhoncus. Duis eu mauris tellus. Morbi dictum gravida elit, ac dapibus purus maximus a. Duis fringilla magna sapien, vitae accumsan neque faucibus et. Aliquam faucibus nibh a velit sollicitudin congue. Vestibulum vulputate, arcu eget cursus aliquet, dolor sem facilisis neque, ac volutpat ante arcu id nisi. Maecenas at sem at ligula fermentum rutrum vel at massa. Aenean ac accumsan felis. Aenean blandit sit amet ante a hendrerit. In pretium euismod nibh. Duis et augue tortor.</p>

                <p>Suspendisse potenti. In ornare malesuada sodales. Mauris molestie urna ex, vel consequat metus placerat in. Sed at accumsan eros, vel volutpat ligula. Duis mollis vitae dolor quis viverra. Ut ut dignissim nulla. Curabitur laoreet volutpat lacinia. Curabitur placerat urna ac augue laoreet pellentesque. Suspendisse potenti. Mauris eget purus quis velit fringilla sollicitudin. Aenean imperdiet lacinia condimentum. Etiam vel erat vel nisi suscipit porttitor vel aliquam ex. Duis tempor dolor dolor, non congue ex sodales et. Mauris porttitor faucibus eros ut ultricies. Nulla eget sapien blandit tortor dictum tempus. Quisque laoreet sem ac lectus accumsan tempus.</p>

                <p>Donec gravida enim eget libero malesuada semper. Maecenas imperdiet egestas mollis. Morbi eleifend libero sapien, sit amet auctor purus condimentum vel. Integer id lacus ut erat consequat varius et condimentum leo. Aliquam imperdiet mattis diam vel aliquam. Integer vulputate nisi eu felis tincidunt accumsan. Suspendisse justo odio, vulputate sed dui at, dictum semper ipsum. Suspendisse consectetur, turpis id elementum vehicula, quam tortor fermentum purus, non elementum massa ante porttitor odio. Phasellus in urna placerat, eleifend orci sed, rhoncus nulla. In sagittis tempor neque a ullamcorper.</p>

                <p>Pellentesque mi mi, porttitor in mi ut, venenatis egestas ex. Praesent felis orci, sodales in nunc at, blandit egestas lorem. Praesent quam nibh, ultricies ut augue nec, commodo lobortis nisl. Maecenas sodales nisi pellentesque erat facilisis, et euismod tellus vehicula. Suspendisse eu convallis sem, vel tincidunt purus. Nullam in consectetur risus. Phasellus dolor ante, feugiat quis dapibus et, pretium eget velit. Pellentesque et dictum leo. Donec rutrum risus ac magna viverra bibendum. Suspendisse convallis malesuada mattis. Etiam eget mi iaculis lectus pellentesque interdum. Morbi commodo lobortis egestas. In nisl sem, eleifend consequat ex eget, rhoncus egestas felis.</p>
            </div>

        </article>

    </div>

</div>
