<template>
    <!-- 
        简洁登录页面模板
        包含用户名、密码输入框和登录按钮
    -->
    <div class="simple-login">
        <!-- 
            登录表单
            @submit.prevent 阻止表单默认提交行为，使用自定义handleLogin方法
        -->
        <form @submit.prevent="handleLogin">
            <!-- 页面标题 -->
            <h2>登录</h2>
            
            <!-- 用户名输入组 -->
            <div class="input-group">
                <!-- 用户名标签 -->
                <label for="username">用户名：</label>
                <!-- 
                    用户名输入框
                    v-model="username" 双向数据绑定到username变量
                    placeholder 输入框提示文本
                -->
                <input 
                    type="text" 
                    id="username" 
                    v-model="username"
                    placeholder="输入用户名"
                />
            </div>
            
            <!-- 密码输入组 -->
            <div class="input-group">
                <!-- 密码标签 -->
                <label for="password">密码：</label>
                <!-- 
                    密码输入框
                    type="password" 隐藏输入的密码字符
                    v-model="password" 双向数据绑定到password变量
                    placeholder 输入框提示文本
                -->
                <input 
                    type="password" 
                    id="password" 
                    v-model="password"
                    placeholder="输入密码"
                />
            </div>
            
            <!-- 登录提交按钮 -->
            <button type="submit">登录</button>
        </form>
        
        <!-- 返回首页链接 -->
        <div class="back-link">
            <!-- Vue Router路由链接，点击返回首页 -->
            <router-link to="/">返回首页</router-link>
        </div>
    </div>
</template>

<script setup>
// 导入Vue的ref函数，用于创建响应式数据
import { ref } from 'vue'

// 创建响应式变量存储用户名输入
const username = ref('')
// 创建响应式变量存储密码输入
const password = ref('')

/**
 * 处理登录表单提交
 * 功能：收集表单数据，发送到后端API验证用户登录
 * 流程：
 * 1. 收集表单数据
 * 2. 发送POST请求到后端API
 * 3. 处理响应结果
 * 4. 根据结果进行相应操作
 */
async function handleLogin() {
    try {
        // 1. 准备要发送的登录数据对象
        const loginData = {
            username: username.value,  // 获取用户名输入框的值
            password: password.value   // 获取密码输入框的值
        }
        
        // 控制台输出，便于调试
        console.log('发送登录请求数据:', loginData)
        
        // 2. 发送POST请求到后端登录接口
        // fetch是浏览器内置的HTTP客户端API
        // 'http://localhost:5000/api/login' 是后端服务的API地址
        // 注意：确保后端服务已经启动并在5000端口运行
        // 这一行是连接前后端的关键：qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)  // 把用户输入的数据打包成JSON格式
        })
        
        // 3. 解析响应数据（JSON格式）
        // response.json() 将响应体解析为JavaScript对象
        const result = await response.json()
        
        // 4. 根据后端返回的success字段判断登录结果
        if (result.success) {
            // 登录成功处理
            console.log('登录成功，返回数据:', result)
            alert('登录成功！欢迎 ' + result.user.username)
            
            // 清空表单输入
            username.value = ''
            password.value = ''
            
            // 在实际项目中，这里通常会：
            // 1. 保存用户登录状态（token或session）
            // 2. 跳转到用户中心或首页
            // 例如：router.push('/dashboard')
            
        } else {
            // 登录失败处理
            console.log('登录失败，错误信息:', result.message)
            alert('登录失败: ' + result.message)
        }
        
    } catch (error) {
        // 捕获和处理网络请求错误
        console.error('连接服务器失败，错误详情:', error)
        
        // 常见错误类型：
        // 1. 网络连接失败（后端服务未启动）
        // 2. 服务器返回非JSON格式
        // 3. 跨域问题（CORS配置错误）
        alert('连接服务器失败，请检查：\n1. 后端服务是否启动\n2. 地址是否正确\n3. 控制台查看详细错误')
    }
}

/**
 * 注意事项：
 * 1. 后端服务必须已经启动并运行在 http://localhost:3000
 * 2. 如果使用不同端口，需要修改上面的API地址
 * 3. 生产环境应该使用环境变量配置API地址
 * 
 * 实际项目中还应该添加：
 * 1. 表单验证（必填字段、格式检查）
 * 2. 加载状态显示（防止重复提交）
 * 3. 错误状态管理
 * 4. 用户会话管理（token存储）
 * 5. 路由守卫（已登录用户跳转）
 */
</script>

<style scoped>
/* 
    CSS样式部分
    定义了登录页面的布局和外观
*/

/* 登录容器样式 - 居中显示，设置宽度 */
.simple-login {
    width: 300px;                    /* 固定宽度 */
    margin: 100px auto;             /* 上下100px外边距，水平居中 */
    padding: 20px;                  /* 内边距 */
}

/* 标题样式 */
h2 {
    text-align: center;              /* 文本居中 */
    margin-bottom: 20px;            /* 底部外边距 */
    color: #333;                    /* 深灰色文字 */
}

/* 输入组样式 - 每个输入框和标签的组合 */
.input-group {
    margin-bottom: 15px;            /* 组之间的垂直间距 */
}

/* 标签样式 */
label {
    display: block;                  /* 块级显示，独占一行 */
    margin-bottom: 5px;             /* 标签和输入框之间的间距 */
    font-size: 14px;                /* 字体大小 */
    color: #555;                    /* 标签文字颜色 */
}

/* 输入框通用样式 */
input {
    width: 100%;                    /* 宽度100%填充父容器 */
    padding: 8px;                   /* 内边距 */
    border: 1px solid #ccc;         /* 边框颜色和宽度 */
    border-radius: 4px;             /* 圆角边框 */
    box-sizing: border-box;         /* 盒模型：宽度包含边框和内边距 */
    font-size: 14px;                /* 字体大小 */
}

/* 输入框获取焦点时的样式 */
input:focus {
    outline: none;                  /* 移除默认轮廓线 */
    border-color: #17d8e6;          /* 边框颜色变为主题色 */
    box-shadow: 0 0 0 2px rgba(23, 216, 230, 0.2); /* 添加发光效果 */
}

/* 登录按钮样式 */
button {
    width: 100%;                    /* 宽度100%填充父容器 */
    padding: 10px;                  /* 内边距 */
    background-color: #17d8e6;      /* 背景颜色 - 主题青色 */
    color: white;                   /* 文字颜色 */
    border: none;                   /* 移除默认边框 */
    border-radius: 4px;             /* 圆角边框 */
    cursor: pointer;                /* 鼠标指针变为手形 */
    font-size: 16px;                /* 字体大小 */
    font-weight: bold;              /* 加粗字体 */
    transition: background-color 0.3s; /* 背景色过渡动画 */
}

/* 按钮悬停状态 */
button:hover {
    background-color: #0fb4c0;      /* 悬停时颜色变深 */
}

/* 返回链接容器 */
.back-link {
    text-align: center;             /* 文本居中 */
    margin-top: 15px;               /* 顶部外边距 */
    padding-top: 15px;              /* 顶部内边距 */
    border-top: 1px solid #eee;     /* 顶部边框线 */
}

/* 返回链接样式 */
.back-link a {
    color: #17d8e6;                 /* 链接颜色 */
    text-decoration: none;          /* 去除下划线 */
    font-size: 14px;                /* 字体大小 */
}

/* 返回链接悬停状态 */
.back-link a:hover {
    text-decoration: underline;     /* 悬停时显示下划线 */
}
</style>