<header class="header">
        <div class="header-container">
            <div class="header__logo">
                <h1>МАГАЗИН</h1>
            </div>
            <? if($_COOKIE['user'] == ''): ?>
            <div class="menu">
                <ul class="menu__items">
                    <li class="item menu-page"><a href="#">Главная</a></li>
                    <li class="item menu-page"><a href="#">Корзина</a></li>
                    <li class="item menu-page"><a href="pages/product.php">Каталог</a></li>
                    <li class="item auth-btn"><a href="#auth">Войти</a></li>
                    <li class="item auth-btn"><a href="#register">Регистрация</a></li>
                </ul>
            </div>
            <? else: ?>
                <div class="menu">
                <ul class="menu__items">
                    <li class="item menu-page"><a href="#">Главная</a></li>
                    <li class="item menu-page"><a href="#">Корзина</a></li>
                    <li class="item menu-page"><a href="pages/product.php">Каталог</a></li>
                    <li class="item auth-btn"><a href="#">Профиль</a></li>
                    <li class="item auth-btn"><a href="/validation-form/exit.php">Выйти</a></li>
                </ul>
            </div>
            <? endif; ?>
        </div>
</header>
<div id="auth" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a href="#close" title="Close" class="close">×</a>
                </div>
                <div class="modal-body">
                    <div class="modal-title"><h4>Войти</h4></div>
                    <div class="form">
                        <form method="POST" action="validation-form/auth.php">
                            <div class="form-input">
                                <p class="title-input">Login: <span class="required">*</span></p>
                                <input type="text" name="login" class="form-control" id="login">
                                <p class="title-input">Password: <span class="required">*</span></p>
                                <input type="password" name="password" id="password" class="form-control">
                                <button type="submit" class="auth-btn">ВОЙТИ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div>
<div id="register" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a href="#close" title="Close" class="close">×</a>
                </div>
                <div class="modal-body">
                    <div class="modal-title"><h4>Регистрация</h4></div>
                    <div class="form">
                        <form method="post" action="validation-form/reg.php">
                            <div class="form-input">
                                <p class="title-input">Name: <span class="required">*</span></p>
                                <input type="text" name="name" class="form-control" id="name">
                                <p class="title-input">Login: <span class="required">*</span></p>
                                <input type="text" name="login" class="form-control" id="login">
                                <p class="title-input">Password: <span class="required">*</span></p>
                                <input type="pass" name="pass" id="pass" class="form-control">
                                <button type="submit" class="auth-btn">Зарегистрироваться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div>