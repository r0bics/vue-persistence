<template>
<div>
hej hej

    <button @click="storeData" class="btn btn-info">store</button>
    <p>meeting: {{ this.meeting }}</p>
    <el-form
        :model="meeting"
        ref="myForm"
        >

        <el-form-item label="Location Name">
            <el-input
            prop="locationName"
            v-model="meeting.locationName"
            placeholder="enter location name"
            ></el-input>
        </el-form-item>

        <el-form-item label="Share Classes" prop="shareClass">
            <el-select
                multiple
                v-model="meeting.shareClasses"
                placeholder="choose share classes"
                >
                <el-option
                    v-for="item in ['class A', 'class B', 'class C']"
                    :key="item"
                    :value="item"
                    :label="item"
                ></el-option>
            </el-select>
        </el-form-item>


    </el-form>
</div>
</template>

<script>
    import store from '../store'

    export default {
        name: 'HelloWorld',
        store,
        props: {
            msg: String
        },

        computed: {
            meeting() {
                return this.$store.state.meeting;
            }
        },

        methods: {
            storeData() {
                this.$store.commit("storeData", 5);
            }
        }

    }
</script>

<style scoped>
</style>
