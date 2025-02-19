"use client"
import BackToTop from "@/components/atoms/back-to-top";
import Container from "@/components/atoms/container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-14 mt-16 bg-dark-500">
      <Container>
        <ul className="flex gap-11">
          <li>
            <Link
              className="text-[11px] leading-4 font-light text-light py-1.5 block hover:text-primary-500"
              href="/"
            >
              会員登録
            </Link>
          </li>
          <li>
            <Link
              className="text-[11px] leading-4 font-light text-light py-1.5 block hover:text-primary-500"
              href="/"
            >
              運営会社
            </Link>
          </li>
          <li>
            <Link
              className="text-[11px] leading-4 font-light text-light py-1.5 block hover:text-primary-500"
              href="/"
            >
              利用規約
            </Link>
          </li>
          <li>
            <Link
              className="text-[11px] leading-4 font-light text-light py-1.5 block hover:text-primary-500"
              href="/"
            >
              個人情報の取扱について
            </Link>
          </li>
          <li>
            <Link
              className="text-[11px] leading-4 font-light text-light py-1.5 block hover:text-primary-500"
              href="/"
            >
              特定商取引法に基づく表記
            </Link>
          </li>
          <li>
            <Link
              className="text-[11px] leading-4 font-light text-light py-1.5 block hover:text-primary-500"
              href="/"
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </Container>
      <BackToTop />
    </div>
  );
};

export default Footer;
