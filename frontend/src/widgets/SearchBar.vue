<template>
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <b-button :class="'btn-search'" @click="display = 'block'"><i class="feather icon-search"></i></b-button>
            <div class="search-bar" v-bind:style="{ display: display }">
                <input type="text" class="form-control border-0 shadow-none" placeholder="Поиск...">
                <b-button :class="'close btn-search-close'" aria-label="Close" @click="display = 'none'">
                    <span aria-hidden="true">&times;</span>
                </b-button>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            display: 'none'
        }
    }
}
</script>

<style scoped>
.btn-search {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
}

.btn-search:hover {
    background-color: transparent;
    border-color: transparent;
}

.btn-search-close {
    background-color: transparent;
    border-color: transparent;
}

.btn-search-close:hover {
    background-color: transparent;
    border-color: transparent;
}
</style>