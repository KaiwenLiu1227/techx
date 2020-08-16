#!/usr/bin/env python
# coding: utf-8

# In[51]:


import pandas as pd
import numpy as np
import pinyin
import sklearn
import jieba.analyse
import sys

# In[52]:


# sort raw data
df = pd.read_csv(r'C:\Users\Bertrand\Desktop\capstone\bilibili-danmu_Top_Guichu.csv')
df = df.sort_values(by=['cid', 'time_in_video'])

# add pinyin column
df['pinyin'] = df['content'].apply(pinyin.get, format='strip', delimiter=' ')
df['pinyin'].tolist()


# remove punctuations
def remove_punctuations(text):
    for punctuation in '＂＃＄％＆＇（）＊＋，－／：；＜＝＞＠［＼］＾＿｀｛｜｝～｟｠｢｣､、〃》「」『』【】〔〕〖〗〘〙〚〛〜〝〞〟〰〾〿–—‘’‛“”„‟…‧﹏！？｡。..。.':
        text = text.replace(punctuation, '')
    for keywords in '哈啊23':
        text = text.replace(keywords, '')
    return text


df['clean_content'] = df['content'].apply(remove_punctuations)
df['clean_content'] = df['clean_content'].str.lower()

# keywords =(jieba.analyse.extract_tags(sentence, topK=30, withWeight=True, allowPOS=(['n','v'])))
# print(keywords)


# In[53]:


df.head()

# In[54]:


# find important keywords as bases for vectorizing danmus
complete_text = ''
for i in range(len(df['clean_content'])):
    complete_text += df['clean_content'][i]
    complete_text += '.'

n_keywords = 30
sentence = complete_text
# topK：返回 TF/IDF 权重最大的关键词个数，默认值为 20；
# withWeight：是否需要返回关键词权重值，默认值为 False；
# allowPOS：仅包括指定词性的词，默认值为空，即不筛选。
keywords = jieba.analyse.extract_tags(sentence, topK=n_keywords, withWeight=False, allowPOS=())
print(keywords)

# enbedding danmus into a encoding matrix
encodings = np.zeros((len(df['clean_content']), n_keywords))
for i in df.index:
    for j in range(n_keywords):
        if keywords[j] in df.loc[i, 'clean_content']:
            encodings[i, j] = 1

print(encodings)

# In[55]:


# KMeans Clustering
from sklearn.cluster import KMeans

model = KMeans(n_clusters=n_keywords * 10).fit(encodings)

# In[56]:


labels = model.labels_
memes = {}
for i in range(encodings.shape[0]):
    label = int(labels[i])
    if label not in list(memes.keys()):
        memes[label] = {'danmu': [df['content'][i]], 'cid': [df['cid'][i]], 'time_in_video': [df['time_in_video'][i]]}
    else:
        memes[label]['danmu'].append(df['content'][i])
        memes[label]['cid'].append(df['cid'][i])
        memes[label]['time_in_video'].append(df['time_in_video'][i])

# In[57]:


dict_of_df = {k: pd.DataFrame(v) for k, v in memes.items()}
data = pd.concat(dict_of_df, axis=0)
data.index.names = ['meme', 'danmu_id']

# In[58]:


data.sort_values(by=['meme', 'cid', 'time_in_video'])

# In[137]:


Input = str(sys.argv[1])

# In[138]:


list(data.shape)

# In[139]:


mask = np.column_stack([data['danmu'].str.contains(Input)])
result = data.loc[mask.any(axis=1)]
result

# In[140]:


result1 = result.groupby(['meme', 'cid']).count().sort_values(by='danmu')
result2 = result1[result1['danmu'] == result1.groupby('meme')['danmu'].transform(max)].nlargest(3, 'danmu')
result3 = result2.reset_index(level=['cid'])
result3

# In[216]:


result.size

# In[ ]:


# In[274]:


diction = {}
for i in range(3):
    cid = result3.iloc[i, 0]
    meme = result3.index[i]
    begin_times = []
    for j in range(result.shape[0]):
        if (result.index.get_level_values('meme')[j] == meme and result.iloc[j, 1] == cid):
            begin_times.append(result.iloc[j, 2])
    diction[i] = begin_times
gugubird = pd.DataFrame(dict([(k, pd.Series(v)) for k, v in diction.items()])).fillna(0).T
gugubird

# In[254]:


begin_times

# In[228]:


result.shape

# In[194]:


# list(result.loc[:,'cid'])


# In[179]:


# full_time = result5['time_in_video'].max()
# intvl = int(full_time/5)


# In[275]:


track = gugubird


def get_interval(num, track):
    output = dict(track.iloc[num, :].value_counts(bins=260))
    max_value = max(output.values())
    max_keys = [k for k, v in output.items() if v == max_value]
    interval = [max_keys[0], col[num]]
    return interval


left = []
right = []
for i in range(len(index)):
    x = get_interval(i, track)
    left.append(x[0].left)
    right.append(x[0].right)

output_dict = {'left': left, 'right': right, 'cid': col}
output = pd.DataFrame(output_dict)
output_json = output.to_json
print(output_json)

# In[86]:


# In[ ]:


# In[ ]:




# In[532]:


# In[ ]:




