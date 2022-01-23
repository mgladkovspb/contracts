<template>
    <div class="nk-file-item nk-file">
        <div class="nk-file-info">
            <div class="nk-file-title">
                <div class="nk-file-icon">
                    <a class="nk-file-icon-link" href="#">
                        <span class="nk-file-icon-type">
                            <file-icon :file-type="attachment.type"></file-icon>
                        </span>
                    </a>
                </div>
                <div class="nk-file-name">
                    <div class="nk-file-name-text">
                        <a href="javascript:;" class="title" @click="downloadFile">{{ attachment.name }}</a>
                        <!-- <div class="asterisk"><a href="#"><em class="asterisk-off icon ni ni-star"></em><em class="asterisk-on icon ni ni-star-fill"></em></a></div> -->
                    </div>
                </div>
            </div>
            <ul class="nk-file-desc">
                <li class="date">{{ attachment.date | moment('DD.MM.YYYY') }}</li>
                <li class="size">{{ (attachment.size / 1024 / 1024).toFixed(2) }} Мб</li>
                <li v-show="uploading"><div class="spinner-border spinner-border-sm" role="status"></div></li>
            </ul>
        </div>
        <div class="nk-file-actions">
            <button class="btn btn-sm btn-icon btn-trigger" @click="remove"><em class="icon ni ni-cross"></em></button>
        </div>
    </div>
</template>

<script>
import FileIcon from '@/widgets/FileIcon.vue'

import { UPLOAD_FILE, DELETE_FILE, DOWNLOAD_FILE } from '@/store/contract.module'
import { mapActions } from 'vuex'

export default {
    name: 'Attachment',
    props: ['attachment'],
    components: {
        FileIcon,
    },
    data() {
        return {
            menuState: 'none',
            uploading: false
        }
    },
    methods: {
        ...mapActions([UPLOAD_FILE, DELETE_FILE]),
        remove() {
            if(this.attachment._id) {
                this[DELETE_FILE](this.attachment._id).then(data => {
                    this.$emit('delete', this.attachment._id)
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        downloadFile() {
            if(this.attachment._id !== undefined)
                this.$store.dispatch(DOWNLOAD_FILE, { 
                    cid: this.attachment.contract,
                    fid: this.attachment._id,
                    name: this.attachment.name
                })
        },
    },
    mounted() {
        const reader = new FileReader()
        if(!this.attachment._id && this.attachment.contract) {
            reader.readAsDataURL(this.attachment.data)
            reader.onload = (e) => {
                this.attachment.data = e.target.result.split(',').pop()
                this.uploading = true
                this[UPLOAD_FILE](this.attachment).then(data => {
                    this.attachment._id = data._id
                    this.uploading = false
                    console.log(data)
                }).catch(error => {
                    this.uploading = false
                    console.log(error)
                })
            }
        }
    }
}
</script>