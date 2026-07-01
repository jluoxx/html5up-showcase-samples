from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SCREEN_DIR = ROOT / "tmp" / "showcase-screens"
OUT_DIR = ROOT / "output" / "showcase-images"
OUT_DIR.mkdir(parents=True, exist_ok=True)

FONT_PATHS = [
    Path("C:/Windows/Fonts/msyh.ttc"),
    Path("C:/Windows/Fonts/simhei.ttf"),
    Path("C:/Windows/Fonts/arial.ttf"),
]


def font(size, bold=False):
    for path in FONT_PATHS:
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


F_TITLE = font(48)
F_SUB = font(28)
F_BODY = font(25)
F_SMALL = font(19)
F_TAG = font(22)

ITEMS = [
    {
        "slug": "massively",
        "name": "摄影博客 / 图文作品集",
        "headline": "让个人故事看起来像一本高级杂志",
        "desc": "适合摄影作品、旅行记录、图文博客和设计展示。",
        "tag": "大图首屏",
        "color": (242, 103, 95),
    },
    {
        "slug": "dimension",
        "name": "高级个人名片页",
        "headline": "打开就是一张高级感在线名片",
        "desc": "适合自由职业者、咨询顾问、简历主页和个人品牌。",
        "tag": "单页弹窗",
        "color": (106, 138, 255),
    },
    {
        "slug": "forty",
        "name": "设计工作室案例墙",
        "headline": "用强视觉网格快速展示专业度",
        "desc": "适合设计案例、摄影系列、品牌项目和作品集首页。",
        "tag": "案例网格",
        "color": (65, 184, 157),
    },
    {
        "slug": "phantom",
        "name": "多项目作品集网格",
        "headline": "一次展示多个作品和服务方向",
        "desc": "适合网页设计案例、产品展示、项目目录和创意作品库。",
        "tag": "多项目展示",
        "color": (245, 177, 77),
    },
    {
        "slug": "hyperspace",
        "name": "服务型个人 / 工作室主页",
        "headline": "把服务、项目和联系方式讲清楚",
        "desc": "适合程序员、自由职业者、小型工作室和技术服务介绍。",
        "tag": "服务介绍",
        "color": (153, 113, 219),
    },
]


def gradient(size, top, bottom):
    img = Image.new("RGB", size, top)
    draw = ImageDraw.Draw(img)
    h = size[1]
    for y in range(h):
        t = y / max(h - 1, 1)
        col = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        draw.line([(0, y), (size[0], y)], fill=col)
    return img


def round_mask(size, radius):
    mask = Image.new("L", size, 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def paste_round(base, img, xy, radius):
    mask = round_mask(img.size, radius)
    base.paste(img, xy, mask)


def shadow(size, radius, blur=28, alpha=120):
    sh = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(sh)
    d.rounded_rectangle((blur, blur, size[0] - blur, size[1] - blur), radius=radius, fill=(0, 0, 0, alpha))
    return sh.filter(ImageFilter.GaussianBlur(blur // 2))


def browser_frame(screenshot, width=1040):
    ratio = screenshot.height / screenshot.width
    content = screenshot.resize((width, int(width * ratio)))
    chrome_h = 54
    frame = Image.new("RGBA", (content.width, content.height + chrome_h), (248, 249, 252, 255))
    d = ImageDraw.Draw(frame)
    d.rounded_rectangle((0, 0, frame.width - 1, frame.height - 1), radius=28, fill=(248, 249, 252, 255))
    d.rounded_rectangle((0, 0, frame.width - 1, chrome_h), radius=28, fill=(241, 243, 247, 255))
    d.rectangle((0, chrome_h - 20, frame.width, chrome_h), fill=(241, 243, 247, 255))
    for i, c in enumerate([(239, 96, 89), (245, 190, 79), (97, 190, 123)]):
        d.ellipse((28 + i * 30, 20, 44 + i * 30, 36), fill=c)
    d.rounded_rectangle((135, 16, frame.width - 28, 39), radius=11, fill=(255, 255, 255, 255))
    frame.paste(content, (0, chrome_h))
    return frame


def text_box(draw, xy, text, fill, fnt, max_width, line_gap=9):
    x, y = xy
    line = ""
    for ch in text:
        test = line + ch
        if draw.textlength(test, font=fnt) <= max_width:
            line = test
        else:
            draw.text((x, y), line, fill=fill, font=fnt)
            y += fnt.size + line_gap
            line = ch
    if line:
        draw.text((x, y), line, fill=fill, font=fnt)
        y += fnt.size + line_gap
    return y


def make_single(item):
    shot = Image.open(SCREEN_DIR / f"{item['slug']}.png").convert("RGB")
    bg = gradient((1600, 1200), (26, 30, 39), (239, 243, 244))
    accent = Image.new("RGBA", (740, 740), (*item["color"], 95))
    accent = accent.filter(ImageFilter.GaussianBlur(95))
    bg.paste(accent, (900, -160), accent)
    canvas = bg.convert("RGBA")
    d = ImageDraw.Draw(canvas)

    frame = browser_frame(shot, 890)
    frame = frame.crop((0, 0, frame.width, min(frame.height, 720)))
    sh = shadow((frame.width + 80, frame.height + 80), 34)
    canvas.paste(sh, (625, 285), sh)
    paste_round(canvas, frame, (665, 325), 28)

    d.rounded_rectangle((90, 104, 250, 152), radius=24, fill=(*item["color"], 255))
    d.text((120, 113), item["tag"], fill=(255, 255, 255), font=F_TAG)
    d.text((90, 205), item["name"], fill=(255, 255, 255), font=F_SUB)
    text_box(d, (90, 270), item["headline"], (255, 255, 255), F_TITLE, 450, 14)
    text_box(d, (92, 500), item["desc"], (223, 230, 238), F_BODY, 470, 12)

    d.rounded_rectangle((90, 676, 420, 736), radius=30, fill=(255, 255, 255, 255))
    d.text((122, 692), "可替换文字 / 图片 / 联系方式", fill=(26, 30, 39), font=F_SMALL)
    d.text((90, 1040), "真实在线网页截图  |  手机电脑自适应  |  可生成专属网址", fill=(35, 42, 54), font=F_SMALL)

    out = OUT_DIR / f"{item['slug']}-poster.png"
    canvas.convert("RGB").save(out, quality=95)
    return out


def make_overview():
    canvas = gradient((1800, 1200), (249, 250, 252), (225, 233, 238)).convert("RGBA")
    d = ImageDraw.Draw(canvas)
    d.text((90, 76), "5 套个人主页展示样板", fill=(26, 30, 39), font=F_TITLE)
    d.text((92, 154), "真实可打开的网址效果，适合个人名片、简历、作品集、摄影和服务介绍。", fill=(82, 91, 107), font=F_BODY)

    positions = [(90, 250), (640, 250), (1190, 250), (365, 710), (915, 710)]
    for item, pos in zip(ITEMS, positions):
        shot = Image.open(SCREEN_DIR / f"{item['slug']}.png").convert("RGB")
        card = Image.new("RGBA", (520, 365), (255, 255, 255, 255))
        cd = ImageDraw.Draw(card)
        cd.rounded_rectangle((0, 0, 519, 364), radius=26, fill=(255, 255, 255, 255), outline=(218, 224, 232), width=1)
        thumb = shot.resize((480, 275))
        paste_round(card, thumb, (20, 20), 18)
        cd.rounded_rectangle((30, 30, 154, 68), radius=19, fill=(*item["color"], 235))
        cd.text((48, 38), item["tag"], fill=(255, 255, 255), font=F_SMALL)
        cd.text((24, 310), item["name"], fill=(29, 35, 45), font=F_TAG)
        sh = shadow((570, 415), 28, blur=22, alpha=70)
        canvas.paste(sh, (pos[0] - 25, pos[1] - 20), sh)
        paste_round(canvas, card, pos, 26)

    out = OUT_DIR / "all-templates-overview.png"
    canvas.convert("RGB").save(out, quality=95)
    return out


def main():
    outputs = [make_single(item) for item in ITEMS]
    outputs.append(make_overview())
    for out in outputs:
        print(out)


if __name__ == "__main__":
    main()
