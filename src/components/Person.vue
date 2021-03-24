<template>
    <div class="person-cover" >
        <div class="person" >
            <div class="details" >
                <p class="name-age" >Festus, 34</p>
                <small class="location" ><i class="fas fa-map-marker-alt" ></i> New york</small>
                <div class="like-dislike" >
                    <div class="like-btn" ><i class="far fa-heart" ></i></div>
                    <div class="dislike-btn" ><i class="far fa-thumbs-down" ></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Person",
    props: {
        person: Object
    }
}
</script>

<style lang="scss" scoped>
.person-cover {
    padding: 0 11px 50px 11px;

    .person {
        position: relative;
        width: 175px;
        padding-top: 156.25%;
        border-radius: 0.5rem;
        box-shadow: 0 0 15px #efefef;

        .details {
            position: absolute;
            bottom: 0;
            color: #ffffff;
            left: 0;
            right: 0;
            padding: 15px;
            border-bottom-left-radius: .5rem;
            border-bottom-right-radius: .5rem;
            transition: all 0.3s;

            .name-age {
                font-size: 1rem;
                margin-bottom: 10px;
            }

            .like-dislike {
                display: none;
                margin-top: 20px;

                .like-btn, .dislike-btn {
                    flex-grow: 1;
                    text-align: center;
                    padding: 5px;
                    color: #ffffff;
                    border-radius: .2rem;
                }

                .like-btn {
                    background: red;
                    margin-right: 5px;
                }

                .dislike-btn {
                    background: #4b19d6;
                    margin-left: 5px;
                }

                .like-btn:hover, .dislike-btn:hover {
                    cursor: pointer;
                }
            }
        }
    }

    .person:hover {
        .details {
            background: #ffffff;
            bottom: -25px;

            .name-age {
                color: #4b19d6;
            }

            .location {
                color: #737373;
            }

            .like-dislike {
                display: flex;
            }
        }
    }
}
</style>