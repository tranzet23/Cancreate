module.exports = function () {
    // only for blog-page
    if (window.location.pathname === '/blog-page.html') {
        const postsWrap = document.querySelector('.blog-cards-wrap');
        const loadSpinner = document.getElementById('load-spinner');

        let posts = postsWrap.querySelectorAll('.blog-card-item');
        posts.forEach(post => {
            postAnimation(post)
        })

        // animation for post
        function postAnimation(post) {
            const postThumb = post.querySelector('.blog-card__img img');

            let showPostScene = gsap.timeline().from(post, {
                duration: 1,
                opacity: 0,
                y: '35%',
                ease: "power1.easeIn",
            }, 0)
                .set(postThumb, {height: 'auto'})
                .from(postThumb, {height: 0, ease: "power1.easeIn", duration: 1}, 0)


            ScrollTrigger.create({
                animation: showPostScene,
                trigger: post,
                start: "top 95%",
                end: "top 95%",
            });
        }

        // get the posts from API
        const getPosts = async (page, limit) => {
            const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
            const response = await fetch(API_URL);
            // handle 404
            if (!response.ok) {
                throw new Error(`An error occurred: ${response.status}`);
            }
            return await response.json();
        }

        // show
        const showPosts = (posts) => {
            posts.forEach(post => {
                const postEl = document.createElement("a");
                postEl.classList.add('blog-card-item');

                postEl.innerHTML = `
            <div class="blog-card-item__wrap">
                <div class="blog-card__img">
                    <img src="img/blog1.png" alt="">
                </div>
                <div class="blog-card-content">
                    <div class="blog-card__top">
                        <span class="date">April 15, 2022</span><span>/</span><span class="category">Design</span> <span class="category">Film</span>
                    </div>
                    <div class="blog-card-title">
                        <p>A new art object near our office</p>
                    </div>
                </div>
            </div>
            `;

                postsWrap.appendChild(postEl);
                postAnimation(postEl);
            })
        }

        const hideLoader = () => {
            loadSpinner.classList.remove('visible');
        }

        const showLoader = () => {
            loadSpinner.classList.add('visible');
        }

        const hasMorePosts = (page, limit, total) => {
            const startIndex = (page - 1) * limit + 1;
            return total === 0 || startIndex < total;
        };

        // load posts
        const loadPosts = async (page, limit) => {

            // show the loader
            showLoader();

            // 0.8 second later
            setTimeout(async () => {
                try {
                    // if having more quotes to fetch
                    if (hasMorePosts(page, limit, total)) {
                        // call the API to get quotes
                        const response = await getPosts(page, limit);
                        // show quotes
                        showPosts(response.data);
                        // update the total
                        total = response.total;
                    }
                } catch (error) {
                    console.log(error.message);
                } finally {
                    hideLoader();
                }
            }, 800);

        };

        // control variables
        let currentPage = 1;
        const limit = 6;
        let total = 0;

        // options intersection (monitoring last post element for load more)
        let options = {
            root: null,
            rootMargin: "0px 0px -20% 0px",
            threshold: 0.25
        };

        function handleIntersect(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting && hasMorePosts(currentPage, limit, total)) {
                    currentPage++;
                    loadPosts(currentPage, limit);
                }
            });
        }

        let observer = new IntersectionObserver(handleIntersect, options);
        // check last post element
        observer.observe(loadSpinner);
    }
}