import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from './type';

export const SEO: FC<SEOProps> = ({ yandexIdMetrika, googleFlowAnalysis }) => (
	<Helmet>
		{/* Яндекс.Metrika */}
		<script type='text/javascript'>
			{`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${yandexIdMetrika}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true,
            trackHash:true,
            ecommerce:"dataLayer"
        });
      `}
		</script>
		<noscript>
			{`
        <div>
          <img src="https://mc.yandex.ru/watch/${yandexIdMetrika}" style="position:absolute;left:-9999px;" alt="" />
        </div>
      `}
		</noscript>

		{/* Google Analytics */}
		<script
			async
			src='https://www.googletagmanager.com/gtag/js?id=G-QC3J4L6VP4'
		/>
		<script>
			{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleFlowAnalysis}');
      `}
		</script>
	</Helmet>
);
