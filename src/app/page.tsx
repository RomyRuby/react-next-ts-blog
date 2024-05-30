import './page.scss'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className='main'>
        <div className='main-introduce'>
          <div className='main-introduce-left'>
            <div className='main-introduce-left-greeting'>Hi, I'm Romy Zhang👋。</div>
            <div className='main-introduce-left-empolyment'>A Front-end Developer
              <div className='main-introduce-left-empolyment-duration'>since 2020</div>
            </div>
            <div className='main-introduce=left-description'>
              Welcome to my personal Space 💎
            </div>
            <div className='main-introduce-left-links'>
              <div className='main-introduce-left-links-item'>
                github
              </div>
              <div className='main-introduce-left-links-item'>
                邮箱
              </div>
              <div>小红书</div>
            </div>
          </div>
          <div className='main-introduce-right'>
            <div className='main-introduce-right-avatar'></div>
          </div>
        </div>

        <div className='main-guide'>
          <div className='main-guide-sentence'>种一棵树最好的时机是十年前，其次是现在</div>
          <div className="main-guide-arrow">箭头icon</div>
        </div>

        <div className='main-article'>
          <div className='main-article-left'>
            <div className="main-article-note">
              <div className='main-article-title'>
                最近更新的笔记
              </div>
            </div>

          </div>
          <div className="main-article-right">
            <div className='main-article-diary'>
              最近更新的日记
            </div>
          </div>
        </div>

        <div className='main-album'>世间只是一些影影绰绰的温柔</div>

        <div className='main-end'>
          <div className='main-end-guide'>可以绕行，狐疑，留在原地</div>
          <div className='main-end-greeting'></div>
          <div className='main-end-nav'></div>
          <div className='main-end-operate'></div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-copyright'></div>
        <div className='footer-operate'></div>
      </div>
    </>
  );
}
