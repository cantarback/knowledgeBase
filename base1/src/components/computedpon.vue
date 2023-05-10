<template>
    <div>
        <div class="container">
            <div class="main">
                <div class="menu">
                    <el-form ref="ruleFormRef" :model="model" :rules="rules" label-width="120px" class="demo-ruleForm"
                        status-icon>
                        <el-form-item label="商品名称 :" prop="goods_name">
                            <el-input v-model="model.goods_name" placeholder="请输入商品名称" />
                        </el-form-item>
                        <el-form-item label="商品分类 :" prop="goods_sort">
                            <el-tree-select v-model="model.goods_sort" placeholder="请输入商品分类" :data="opttis"
                                :render-after-expand="false" show-checkbox class="check_ipt" />
                        </el-form-item>
                        <el-form-item label="商品图片 :" prop="goods_file">
                            <el-upload action="#" list-type="picture-card" :auto-upload="false" class="addPic"
                                v-model:file-list="model.goods_file">
                                <el-icon>
                                    <Plus />
                                </el-icon>
                                <template #file="{ file }">
                                    <div>
                                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                        <span class="el-upload-list__item-actions">
                                            <span class="el-upload-list__item-preview"
                                                @click="handlePictureCardPreview(file)">
                                                <el-icon><zoom-in /></el-icon>
                                            </span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                @click="handleRemove(file)">
                                                <el-icon>
                                                    <Delete />
                                                </el-icon>
                                            </span>
                                        </span>
                                    </div>
                                </template>
                            </el-upload>
                            <el-dialog v-model="dialogVisible">
                                <img w-full :src="dialogImageUrl" alt="Preview Image" />
                            </el-dialog>
                        </el-form-item>
                        <el-form-item>
                            <p class="tips">建议尺寸：750*750像素, 最多上传10张, 可拖拽图片调整顺序, 第1张将作为商品首图</p>
                        </el-form-item>
                        <el-form-item label="商品编码 :" prop="goods_Index">
                            <el-input v-model="model.goods_Index" />
                        </el-form-item>
                        <el-form-item label="运费模板 :" prop="goods_trans">
                            <el-select v-model="model.goods_trans" class="m-2" placeholder="请选择运费模板">
                                <el-option v-for="item in optionstransition" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select> </el-form-item>
                        <el-form-item label="商品状态 :" prop="goods_stats">
                            <el-radio-group v-model="model.goods_stats" class="ml-4">
                                <el-radio label="1">上架</el-radio>
                                <el-radio label="0">下架</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="商品排序 :" prop="goods_sortnum" class="pick">
                            <el-input-number v-model="model.goods_sortnum" :min="1" :max="100" controls-position="right" />
                            <p class="tips">数字越小越靠前</p>
                        </el-form-item>
                        <el-form-item class="menu-btn">
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'
import { reactive, computed, ref, getCurrentInstance } from 'vue'
const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['update:modelValue']);

const model = computed({
    get() {
        return new Proxy(props.modelValue, {
            set(obj, name, val) {
                console.log('emit', name, val);
                emit('update:modelValue', {
                    ...obj, [name]: val
                })
                return true
            }
        })
    },
    set(val) {
        emit('update:modelValue', val)
    }
})
</script>

<style scoped>
.main {
    width: 800px;
}

:deep(.el-form-item__content) {
    display: block;
}


.menu-btn {
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

img {
    width: 100%;
}

.addPic :deep(.el-upload--picture-card) {
    width: 100px;
    height: 100px;
}

.check_ipt {
    width: 100%;
}

.addPic :deep(li) {
    width: 100px;
    height: 100px;
}

.tips {
    color: #999;
    font-size: 13px;
    padding: 10px 0 0 0;
}

:deep(.menu-btn .el-form-item__content) {
    justify-content: left;
}
</style>