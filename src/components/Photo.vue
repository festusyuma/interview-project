<template>
    <div class="person-cover" >
        <div class="person" >
            <div class="person-image-cover">
                <img :src="photo.img" alt="" >
            </div>
            <div class="details" >
                <p class="name-age" >{{ photo.firstName }}, {{ photo.age }}</p>
                <small class="location" ><i class="fas fa-map-marker-alt" ></i> {{ photo.location }}</small>
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
    name: "Photo",
    props: {
        photo: Object
    }
}
</script>

<style lang="scss" scoped>
.person-cover {
    padding: 0 15px 50px 15px;

    .person {
        position: relative;
        padding-top: 140%;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px #efefef;

        .person-image-cover {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: red;
            border-radius: .5rem;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .details {
            position: absolute;
            bottom: 0;
            color: #ffffff;
            background: #00000014;
            box-shadow: 0 -2px 10px #00000014;
            left: 0;
            right: 0;
            padding: 15px;
            border-bottom-left-radius: .5rem;
            border-bottom-right-radius: .5rem;
            transition: all 0.1s;

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
            bottom: -35px;
            box-shadow: 0 10px 10px #efefef;

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