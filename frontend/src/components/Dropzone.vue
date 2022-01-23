<template>
    <div ref="dropzone" class="dropzone nk-files nk-files-view-grid" :disabled="!contract">
        <div class="nk-files-list" v-if="files.length > 0">
            <attachment-view v-for="(file, idx) in files" :key="idx" :attachment="file" v-on:delete="onDelete"></attachment-view>
        </div>
        <div v-else class="dz-message">
            <span class="dz-message-text">Перетащи файлы сюда</span>
            <span class="dz-message-or">или</span>
            <button class="btn btn-primary">Выбери</button>
        </div>
    </div>
</template>

<script>
import Attachment from '@/models/attachment'
import AttachmentView from '@/components/Attachment.vue'

import { CONTRACT_FILE_LIST } from '@/store/contract.module'
import { mapActions } from 'vuex'

export default {
    name: 'Dropzone',
    props: ['contract'],
    components: {
        AttachmentView,
    },
    data() {
        return {
            files: []
        }
    },
    methods: {
        ...mapActions([CONTRACT_FILE_LIST]),
        onDelete(id) {
            this.files = this.files.filter(item => item._id !== id)
        },
        updateServerFiles() {
            this[CONTRACT_FILE_LIST](this.contract).then(data => {
                this.files = data
            }).catch(error => {
                console.log(error)
            })
        }
    },
    mounted() {
        ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function(evt) {
            this.$refs.dropzone.addEventListener(evt, function(e) {
                e.preventDefault()
                e.stopPropagation()
            }.bind(this), false)
        }.bind(this))

        this.$refs.dropzone.addEventListener('drop', function(e) {
            for( let i = 0; i < e.dataTransfer.files.length; i++ ) {
                const file = e.dataTransfer.files[i]
                const attachment = new Attachment()
                attachment.contract = this.contract,
                attachment.name = file.name,
                attachment.type = file.type,
                attachment.date = file.lastModifiedDate,
                attachment.size = file.size,
                attachment.data = file
                this.files.push(attachment)
            }
        }.bind(this))

        this.updateServerFiles()
    }
}
</script>

<style scoped>
.dropzone {
    min-height: 150px;
    border: 0;
    border-radius: 0;
    background: transparent;
    padding: 20px 20px;
}
</style>