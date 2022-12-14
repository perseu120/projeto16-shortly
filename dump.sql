PGDMP          +        	        z            d6qop1commgug5     14.4 (Ubuntu 14.4-1.pgdg20.04+1) #   14.4 (Ubuntu 14.4-0ubuntu0.22.04.1) %    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    21913769    d6qop1commgug5    DATABASE     c   CREATE DATABASE d6qop1commgug5 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE d6qop1commgug5;
                xrjzavrceubxqy    false            ?           0    0    DATABASE d6qop1commgug5    ACL     A   REVOKE CONNECT,TEMPORARY ON DATABASE d6qop1commgug5 FROM PUBLIC;
                   xrjzavrceubxqy    false    4334            ?           0    0    d6qop1commgug5    DATABASE PROPERTIES     R   ALTER DATABASE d6qop1commgug5 SET search_path TO '$user', 'public', 'heroku_ext';
                     xrjzavrceubxqy    false                        2615    21914774 
   heroku_ext    SCHEMA        CREATE SCHEMA heroku_ext;
    DROP SCHEMA heroku_ext;
                u10hin7v198da6    false            ?           0    0    SCHEMA heroku_ext    ACL     4   GRANT USAGE ON SCHEMA heroku_ext TO xrjzavrceubxqy;
                   u10hin7v198da6    false    6            ?           0    0    SCHEMA public    ACL     ?   REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO xrjzavrceubxqy;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   xrjzavrceubxqy    false    5            ?           0    0    LANGUAGE plpgsql    ACL     1   GRANT ALL ON LANGUAGE plpgsql TO xrjzavrceubxqy;
                   postgres    false    837            ?            1259    23447473    links    TABLE     ?   CREATE TABLE public.links (
    id integer NOT NULL,
    "shortLink" text NOT NULL,
    "longLink" text NOT NULL,
    "visitLink" integer DEFAULT 0 NOT NULL,
    "dataCreate" date DEFAULT CURRENT_DATE NOT NULL,
    "idUsers" integer NOT NULL
);
    DROP TABLE public.links;
       public         heap    xrjzavrceubxqy    false            ?            1259    23447472    links_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.links_id_seq;
       public          xrjzavrceubxqy    false    215            ?           0    0    links_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;
          public          xrjzavrceubxqy    false    214            ?            1259    23447460    sessions    TABLE     s   CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "idUsers" integer NOT NULL
);
    DROP TABLE public.sessions;
       public         heap    xrjzavrceubxqy    false            ?            1259    23447459    sessions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sessions_id_seq;
       public          xrjzavrceubxqy    false    213            ?           0    0    sessions_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;
          public          xrjzavrceubxqy    false    212            ?            1259    23447446    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    email text NOT NULL,
    senha character varying(64) NOT NULL,
    "dataCreate" date DEFAULT CURRENT_DATE NOT NULL
);
    DROP TABLE public.users;
       public         heap    xrjzavrceubxqy    false            ?            1259    23447445    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          xrjzavrceubxqy    false    211            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          xrjzavrceubxqy    false    210            E           2604    23447476    links id    DEFAULT     d   ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);
 7   ALTER TABLE public.links ALTER COLUMN id DROP DEFAULT;
       public          xrjzavrceubxqy    false    215    214    215            D           2604    23447463    sessions id    DEFAULT     j   ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);
 :   ALTER TABLE public.sessions ALTER COLUMN id DROP DEFAULT;
       public          xrjzavrceubxqy    false    213    212    213            B           2604    23447449    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          xrjzavrceubxqy    false    210    211    211            ?          0    23447473    links 
   TABLE DATA           b   COPY public.links (id, "shortLink", "longLink", "visitLink", "dataCreate", "idUsers") FROM stdin;
    public          xrjzavrceubxqy    false    215   7'       ?          0    23447460    sessions 
   TABLE DATA           8   COPY public.sessions (id, token, "idUsers") FROM stdin;
    public          xrjzavrceubxqy    false    213   ,(       ?          0    23447446    users 
   TABLE DATA           E   COPY public.users (id, name, email, senha, "dataCreate") FROM stdin;
    public          xrjzavrceubxqy    false    211   ?(       ?           0    0    links_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.links_id_seq', 9, true);
          public          xrjzavrceubxqy    false    214            ?           0    0    sessions_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.sessions_id_seq', 2, true);
          public          xrjzavrceubxqy    false    212            ?           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public          xrjzavrceubxqy    false    210            Q           2606    23447487    links links_longLink_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_longLink_key" UNIQUE ("longLink");
 D   ALTER TABLE ONLY public.links DROP CONSTRAINT "links_longLink_key";
       public            xrjzavrceubxqy    false    215            S           2606    23447482    links links_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.links DROP CONSTRAINT links_pk;
       public            xrjzavrceubxqy    false    215            U           2606    23447485    links links_shortLink_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_shortLink_key" UNIQUE ("shortLink");
 E   ALTER TABLE ONLY public.links DROP CONSTRAINT "links_shortLink_key";
       public            xrjzavrceubxqy    false    215            M           2606    23447468    sessions sessions_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pk;
       public            xrjzavrceubxqy    false    213            O           2606    23447471    sessions sessions_token_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);
 E   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_token_key;
       public            xrjzavrceubxqy    false    213            I           2606    23447456    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            xrjzavrceubxqy    false    211            K           2606    23447454    users users_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
       public            xrjzavrceubxqy    false    211            W           2606    23447495    links links_fk0    FK CONSTRAINT     p   ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_fk0 FOREIGN KEY ("idUsers") REFERENCES public.users(id);
 9   ALTER TABLE ONLY public.links DROP CONSTRAINT links_fk0;
       public          xrjzavrceubxqy    false    211    4171    215            V           2606    23447489    sessions sessions_fk0    FK CONSTRAINT     v   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY ("idUsers") REFERENCES public.users(id);
 ?   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_fk0;
       public          xrjzavrceubxqy    false    4171    213    211            ?   ?   x??ͽN?0?z?.???c;t?t'?"E?Y' _|?o?G?(?i?i?X?)?\?%?1??{3?4Ej\:3Ѐ????
?J?R?????q&????{?ݱ?q??1??? ?qG??9\?]vsJ1_???2?FO?
5&_??a?j O?ktB?`.mK??4??|???)?<h?ZB:xK*?iirb?5?PIu+??9?%?????Z??aO??*+??v??s?B???A??ꩩ??T?r?      ?   M   x?Ǳ?0 ?:??v?!!???~?<w???-?(???M85M4???`???]?
?؃b;??!Բ???4? >??7      ?   ?   x?eͻ?0 @ѹ?V?T+?iã&FI4????m?^?r?c!????6????Z`?̰?A!k?[)%K?΋?Ƴ??.ua?ʢ???$i??]???Y??06?k".@??>}?/O<xd??IT?0w4??????yu?D?{oð?#?	?X?7?;?     