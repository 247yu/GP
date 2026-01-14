<template>
    <header>
        <div class="header-wrapper">
            <a href="#" class="gp-logo">PG</a> 
        </div> 
        <div class="header-main">
            <h1 class="main-title">P G</h1>
        </div>
        <div class="header-right">
            <nav class="main-nav">
                <RouterLink to="/app" class="nav-link">获取手机App</RouterLink>
                <RouterLink to="/login" class="nav-link">登录</RouterLink>
            </nav>
        </div>
    </header>

    <main>
        <RouterLink to="learn" class="conten-link">
            <div class="content">
                <h1 class="content-title">开始学习</h1>
                <p>DIY AI LREAN</p>
            </div>
        </RouterLink>
        <RouterLink to="shop" class="sidebar-link">
            <div class="sidebar">
                <h2 class="sidebar-title">购物商场</h2>
                <p>智能家居 零件</p>
            </div>
        </RouterLink>       
    </main>

    <footer>
        <div class="footer-content">
            <p>© 2024 PG 公司. 保留所有权利。</p>
        </div>
    </footer>
</template>
<style scoped>
/* ====== 固定顶部Header样式 ====== */
/* 使用固定定位，使header始终悬浮在页面顶部 */
header {
    position: fixed;            /* 固定定位 */
    display: flex;              /* 启用弹性盒布局 */
    justify-content: space-between; /* 子元素在主轴两端对齐：logo在左，导航在右 */
    align-items: center;        /* 子元素在交叉轴（垂直方向）居中对齐 */
    padding: 10px 20px;        /* 内边距：上下10px，左右20px */
    background-color: #f8f8f8; /* 浅灰色背景 */
    border-bottom: 1px solid #ddd; /* 底部边框线 */
    top: 0;                     /* 贴合视口顶部 */
    left: 0;                    /* 贴合视口左侧 */
    width: 100%;                /* 宽度撑满整个视口 */
    z-index: 1000;              /* 较高的堆叠顺序，确保在最上层 */
    box-sizing: border-box;     /* 宽度计算包含内边距和边框 */
}

/* ====== 标题居中容器 ====== */
/* 使主标题在header中水平居中 */
.header-main {
    position: absolute;         /* 绝对定位（相对于header） */
    left: 50%;                  /* 水平方向移动到中间位置 */
    transform: translateX(-50%); /* 向左偏移自身宽度的50%，实现完美居中 */
    color: #17d8e6;            /* 品牌主题色（青色） */
}
    
/* ====== Logo样式 ====== */
/* 位于header左上角的品牌标志 */
.gp-logo {
    font-size: 24px;           /* 字体大小 */
    font-weight: bold;         /* 粗体显示 */
    color: #17d8e6;            /* 品牌主题色（青色） */
    text-decoration: none;     /* 去除链接下划线 */
    transition: color 0.3s ease; /* 颜色过渡动画效果，持续0.3秒 */
    position: static;          /* 静态定位，不脱离文档流 */
    z-index: 1001;             /* 比header更高的堆叠顺序 */
    padding: 5px 10px;         /* 内边距增加点击区域 */
}

/* Logo悬停效果 */
.gp-logo:hover {
    color: #0fb4c0;            /* 鼠标悬停时颜色加深 */
}

/* ====== 右侧导航区域 ====== */
/* 包含导航链接的容器 */
.header-right {
    display: flex;              /* 启用弹性盒布局 */
    align-items: center;        /* 垂直居中对齐 */
}

/* 导航菜单容器 */
.header-right .main-nav {
    display: flex;              /* 水平排列导航链接 */
    gap: 25px;                  /* 导航链接之间的间距为25px */
    list-style: none;           /* 去除列表默认样式（如项目符号） */
    padding: 0;                 /* 去除内边距 */
    margin: 0;                  /* 去除外边距 */
}

/* 单个导航链接样式 */
.header-right .main-nav .nav-link {
    text-decoration: none;     /* 去除链接下划线 */
    color: #000303;            /* 深灰色文字颜色 */
    font-size: 16px;           /* 字体大小 */
    padding: 5px 10px;         /* 内边距增加点击区域 */
    transition: color 0.3s ease; /* 颜色过渡动画效果 */
}

/* 导航链接悬停效果 */
.header-right .main-nav .nav-link:hover {
    color: #17d8e6;            /* 鼠标悬停时变为品牌主题色 */
}



main {
    display: flex;
    padding: 40px;
    gap: 30px;                       /* 内容区域与侧边栏之间的间距 */
    box-sizing: border-box;          /* 宽度计算包含内边距 */
}
.content {
    height: 100%;
    flex: 7;
    padding-right: 20px;
    border-radius:16px;
    box-shadow:0 4px 8px rgba(0,0,0,0.1);
    border:1px solid #ccc;
    min-width: 400px;
}
.content-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.sidebar {
    flex: 7 ;
    padding-right: 20px;
    border-radius:16px;
    box-shadow:0 4px 8px rgba(0,0,0,0.1);
    border:1px solid #ccc;
    min-width: 400px;
}
.sidebar .title {
    font-size: 24px;
    margin-bottom: 20px;
}
.content:hover, .sidebar:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12); /* 悬停时阴影加深 */
    transition: box-shadow 0.3s ease; /* 平滑过渡效果 */
}

footer {
    background-color: #f8f8f8;
    border-top: 1px solid #ddd;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
}
.footer-content p {
    margin: 0;
    color: #666;
}
</style>